
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import PortfolioFilter from '@/components/PortfolioFilter';
import { portfolioProjects } from '@/data';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects);
  const [categories, setCategories] = useState<string[]>([]);
  
  useEffect(() => {
    // Extract unique categories
    const uniqueCategories = Array.from(
      new Set(portfolioProjects.map(project => project.category))
    );
    setCategories(uniqueCategories);
    
    // Apply filtering
    if (activeFilter === 'all') {
      setFilteredProjects(portfolioProjects);
    } else {
      setFilteredProjects(
        portfolioProjects.filter(project => project.category === activeFilter)
      );
    }
  }, [activeFilter]);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
  };

  return (
    <div className="bg-white text-dboy-black min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-dboy-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Portfolio</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Explore my design projects across branding, UI/UX, web design, and more. Each project 
            represents a unique challenge and creative solution.
          </p>
        </div>
      </section>
      
      {/* Portfolio Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <PortfolioFilter 
            categories={categories}
            onFilterChange={handleFilterChange}
            activeFilter={activeFilter}
          />
          
          <div className="portfolio-grid">
            {filteredProjects.map(project => (
              <ProjectCard 
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
                client={project.client}
                featured={project.featured}
              />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-gray-600">Try selecting a different category filter.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-dboy-light-gray">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something amazing together. Get in touch to discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="inline-block px-6 py-3 bg-dboy-pink text-white font-medium rounded hover:bg-dboy-pink/90 transition-colors">
              Start a Project
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PortfolioPage;
