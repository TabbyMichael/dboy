
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProgressBar from '@/components/ProgressBar';
import { skills, clients } from '@/data';

const AboutPage = () => {
  return (
    <div className="bg-white text-dboy-black min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-dboy-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Me</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            I'm a passionate graphic designer with over 10 years of experience creating impactful visual solutions.
          </p>
        </div>
      </section>
      
      {/* Bio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Designer at work" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <p className="text-gray-700 mb-4">
                I'm Daniel, the creative mind behind Dboy Graphics. With a passion for design that began in childhood, 
                I've spent the last decade honing my craft and helping brands tell their stories through powerful visuals.
              </p>
              <p className="text-gray-700 mb-4">
                After graduating with a degree in Graphic Design from Parsons School of Design, I worked with several 
                top agencies before launching my own studio in 2018. Since then, I've collaborated with clients ranging 
                from startups to Fortune 500 companies.
              </p>
              <p className="text-gray-700 mb-4">
                My approach combines strategic thinking with creative execution. I believe that great design solves problems 
                while creating emotional connections. Every project begins with deep research and understanding of the brand's 
                goals and audience.
              </p>
              <p className="text-gray-700">
                When I'm not designing, you can find me exploring new art exhibitions, photographing urban landscapes, or 
                experimenting with new design techniques and tools.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 bg-dboy-light-gray">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <ProgressBar 
                key={index}
                skillName={skill.name}
                percentage={skill.level}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Tools Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Design Tools I Use</h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center p-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/120px-Adobe_Photoshop_CC_icon.svg.png" alt="Photoshop" className="h-16 mb-2 mx-auto" />
              <p className="font-medium">Photoshop</p>
            </div>
            <div className="text-center p-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/120px-Adobe_Illustrator_CC_icon.svg.png" alt="Illustrator" className="h-16 mb-2 mx-auto" />
              <p className="font-medium">Illustrator</p>
            </div>
            <div className="text-center p-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/120px-Adobe_InDesign_CC_icon.svg.png" alt="InDesign" className="h-16 mb-2 mx-auto" />
              <p className="font-medium">InDesign</p>
            </div>
            <div className="text-center p-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/120px-Adobe_After_Effects_CC_icon.svg.png" alt="After Effects" className="h-16 mb-2 mx-auto" />
              <p className="font-medium">After Effects</p>
            </div>
            <div className="text-center p-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="h-16 mb-2 mx-auto" />
              <p className="font-medium">Figma</p>
            </div>
            <div className="text-center p-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/120px-Sketch_Logo.svg.png" alt="Sketch" className="h-16 mb-2 mx-auto" />
              <p className="font-medium">Sketch</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="py-16 bg-dboy-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Design Philosophy</h2>
            <p className="text-xl text-gray-300 mb-8">
              "I believe design should be purposeful, impactful, and timeless. Every pixel and every curve 
              should have meaning and contribute to the larger story we're telling. Great design isn't just 
              about aesthetics—it's about solving problems and creating connections."
            </p>
            <p className="text-dboy-pink font-heading font-bold text-2xl">— Daniel B.</p>
          </div>
        </div>
      </section>
      
      {/* Clients Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Clients & Collaborations</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img src={client.logo} alt={client.name} className="h-12 md:h-16" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dboy-pink to-dboy-purple text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Like what you see?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to bring your brand's vision to life through creative design solutions.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-white text-dboy-pink font-medium rounded-md hover:bg-white/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
