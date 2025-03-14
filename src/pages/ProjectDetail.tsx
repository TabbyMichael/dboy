
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { portfolioProjects } from '@/data';
import { Button } from '@/components/ui/button';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [nextProject, setNextProject] = useState<any>(null);
  const [prevProject, setPrevProject] = useState<any>(null);
  
  useEffect(() => {
    if (id) {
      const currentProject = portfolioProjects.find(p => p.id === id);
      
      if (currentProject) {
        setProject(currentProject);
        
        // Find indexes
        const currentIndex = portfolioProjects.findIndex(p => p.id === id);
        const nextIndex = (currentIndex + 1) % portfolioProjects.length;
        const prevIndex = currentIndex === 0 ? portfolioProjects.length - 1 : currentIndex - 1;
        
        setNextProject(portfolioProjects[nextIndex]);
        setPrevProject(portfolioProjects[prevIndex]);
      }
    }
    
    // Scroll to top when project changes
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <p className="mb-6">The project you're looking for doesn't exist.</p>
          <Link to="/portfolio" className="text-dboy-pink hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-dboy-black min-h-screen">
      <Navbar />
      
      {/* Hero Image */}
      <section className="pt-24 relative h-[70vh]">
        <div className="absolute inset-0 bg-dboy-black">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dboy-black via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6 relative h-full flex flex-col justify-end pb-16">
          <div className="text-white mb-8">
            <p className="text-dboy-pink mb-2">{project.category}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{project.title}</h1>
            {project.client && (
              <p className="text-gray-300 text-xl">Client: {project.client}</p>
            )}
          </div>
        </div>
      </section>
      
      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-700 mb-6">{project.description}</p>
              
              {project.tags && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag: string, index: number) => (
                    <span 
                      key={index} 
                      className="bg-dboy-light-gray px-3 py-1 rounded-full text-sm text-dboy-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            {/* In a real project, you would have more project details and additional images here */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-gray-700 mb-6">
                Every project comes with its unique challenges. For {project.title}, we needed to balance
                brand recognition with a fresh approach that would appeal to both existing customers and
                new audiences.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-gray-700 mb-6">
                Our approach focused on creating a design that was both functional and visually striking.
                We worked closely with the client to understand their goals and audience, then crafted a
                solution that exceeded expectations.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">The Result</h2>
              <p className="text-gray-700 mb-6">
                The final design was met with enthusiasm from the client and their customers. The project
                helped increase brand recognition and achieved all the key objectives set at the beginning
                of our collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Navigation Between Projects */}
      <section className="py-12 bg-dboy-light-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link 
              to={`/portfolio/${prevProject.id}`} 
              className="flex items-center text-dboy-black hover:text-dboy-pink mb-4 md:mb-0"
            >
              <ArrowLeft size={20} className="mr-2" />
              <span>Previous Project</span>
            </Link>
            
            <Link 
              to="/portfolio" 
              className="text-dboy-pink font-medium hover:underline"
            >
              Back to All Projects
            </Link>
            
            <Link 
              to={`/portfolio/${nextProject.id}`} 
              className="flex items-center text-dboy-black hover:text-dboy-pink mt-4 md:mt-0"
            >
              <span>Next Project</span>
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-dboy-black text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something amazing together. Get in touch to discuss your vision.
          </p>
          <Button 
            asChild
            className="bg-dboy-pink hover:bg-dboy-pink/90 text-white"
          >
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
