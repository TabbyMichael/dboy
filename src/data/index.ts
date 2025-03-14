
import { ArrowUpRight, Palette, Layout, Code, Video, PenTool, FileImage } from 'lucide-react';

// Portfolio Data
export const portfolioProjects = [
  {
    id: 'branding-cosmic-cafe',
    title: 'Cosmic Cafe Branding',
    category: 'Branding',
    client: 'Cosmic Cafe',
    image: 'https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    featured: true,
    description: 'Complete branding package for an innovative space-themed cafe in Portland. The project included logo design, menu design, packaging, and interior design consultation.',
    tags: ['Branding', 'Logo Design', 'Print', 'Identity']
  },
  {
    id: 'ui-fitness-app',
    title: 'FitLife Mobile App UI',
    category: 'UI/UX Design',
    client: 'FitLife Inc.',
    image: 'https://images.unsplash.com/photo-1616499370260-485b3e5ed1fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    featured: false,
    description: 'User interface design for a fitness tracking application focused on usability and clean aesthetics.',
    tags: ['UI Design', 'Mobile App', 'User Experience']
  },
  {
    id: 'motion-tech-showcase',
    title: 'Tech Product Showcase',
    category: 'Motion Graphics',
    client: 'NextGen Devices',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    featured: false,
    description: 'Dynamic motion graphics video showcasing features of a new tech product line.',
    tags: ['Motion Graphics', 'Animation', 'Product Video']
  },
  {
    id: 'web-design-artisan',
    title: 'Artisan Marketplace',
    category: 'Web Design',
    client: 'Handmade Collective',
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    featured: true,
    description: 'E-commerce website designed for a collective of artisan crafters, focusing on showcasing individual artisans and their unique products.',
    tags: ['Web Design', 'E-commerce', 'UI/UX']
  },
  {
    id: 'logo-summit-outdoors',
    title: 'Summit Outdoors Logo',
    category: 'Logo Design',
    client: 'Summit Outdoors',
    image: 'https://images.unsplash.com/photo-1603145733146-ae562a55031e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    featured: false,
    description: 'Minimalist yet powerful logo design for an outdoor adventure company specializing in mountain expeditions.',
    tags: ['Logo Design', 'Branding', 'Identity']
  },
  {
    id: 'print-organic-packaging',
    title: 'Organic Food Packaging',
    category: 'Print Design',
    client: 'Pure Harvest',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    featured: false,
    description: 'Sustainable packaging design for an organic food producer, emphasizing eco-friendly materials and clear communication of product benefits.',
    tags: ['Packaging', 'Print Design', 'Illustration']
  }
];

// Services Data
export const services = [
  {
    id: 'branding',
    title: 'Branding & Identity',
    description: 'Comprehensive branding solutions including logo design, brand guidelines, and identity systems.',
    icon: Palette,
    price: 'Ksh 320,000'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'User-centered interface and experience design for web and mobile applications.',
    icon: Layout,
    price: 'Ksh 390,000'
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Custom website design with focus on aesthetics, usability, and conversion optimization.',
    icon: Code,
    price: 'Ksh 230,000'
  },
  {
    id: 'motion',
    title: 'Motion Graphics',
    description: 'Dynamic animations and visual effects for videos, presentations, and digital platforms.',
    icon: Video,
    price: 'Ksh 195,000'
  },
  {
    id: 'logo',
    title: 'Logo Design',
    description: 'Distinctive, memorable logo design that encapsulates your brand essence.',
    icon: PenTool,
    price: 'Ksh 105,000'
  },
  {
    id: 'print',
    title: 'Print Design',
    description: 'Packaging, business collateral, posters, and other print materials designed for impact.',
    icon: FileImage,
    price: 'Ksh 78,000'
  }
];

// Testimonials Data
export const testimonials = [
  {
    quote: "Dboy Graphics brought our brand vision to life in ways we couldn't have imagined. Their attention to detail and creative thinking elevated our entire brand identity.",
    name: "Alex Morgan",
    position: "CEO",
    company: "Cosmic Cafe",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "The app UI design exceeded our expectations. User engagement increased by 45% within the first month of launch, and our customers love the intuitive interface.",
    name: "Sarah Johnson",
    position: "Product Manager",
    company: "FitLife Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    quote: "Our product video has been viewed over 500,000 times since launch. The motion graphics work was spectacular and helped us clearly communicate complex features.",
    name: "Michael Chang",
    position: "Marketing Director",
    company: "NextGen Devices",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

// Skills Data
export const skills = [
  { name: 'Brand Strategy', level: 95 },
  { name: 'UI/UX Design', level: 90 },
  { name: 'Logo Design', level: 98 },
  { name: 'Adobe Creative Suite', level: 95 },
  { name: 'Figma', level: 92 },
  { name: 'Motion Graphics', level: 85 },
  { name: 'Web Design', level: 88 },
  { name: 'Typography', level: 94 }
];

// Client Logos
export const clients = [
  { name: 'Cosmic Cafe', logo: 'https://placehold.co/200x80/333/white?text=Cosmic+Cafe' },
  { name: 'FitLife', logo: 'https://placehold.co/200x80/333/white?text=FitLife' },
  { name: 'NextGen', logo: 'https://placehold.co/200x80/333/white?text=NextGen' },
  { name: 'Summit', logo: 'https://placehold.co/200x80/333/white?text=Summit' },
  { name: 'Pure Harvest', logo: 'https://placehold.co/200x80/333/white?text=Pure+Harvest' },
  { name: 'Handmade', logo: 'https://placehold.co/200x80/333/white?text=Handmade' }
];
