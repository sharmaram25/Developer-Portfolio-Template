import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
  category: string
  date: string
}

export default function Projects() {
  // Sample projects - replace with real data
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with advanced features and beautiful UI",
      longDescription: "Built with React, Node.js, and MongoDB. Features include user authentication, payment integration, admin dashboard, and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://your-ecommerce.netlify.app",
      featured: true,
      category: "Full Stack",
      date: "2024"
    },
    {
      id: 2,
      title: "AI-Powered Dashboard",
      description: "Interactive dashboard with AI-driven analytics and real-time data visualization",
      longDescription: "A comprehensive analytics dashboard that uses machine learning to provide insights. Built with React, Python, and D3.js for stunning data visualizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["React", "Python", "D3.js", "TensorFlow", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/ai-dashboard",
      liveUrl: "https://your-dashboard.netlify.app",
      featured: true,
      category: "Data Science",
      date: "2024"
    },
    {
      id: 3,
      title: "Social Media App",
      description: "A modern social media application with real-time messaging and media sharing",
      longDescription: "Full-featured social media platform with user profiles, posts, comments, real-time chat, and media uploads. Built with modern React patterns and WebSocket integration.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=600&fit=crop",
      technologies: ["React", "Express", "Socket.io", "AWS S3", "Redis"],
      githubUrl: "https://github.com/yourusername/social-app",
      liveUrl: "https://your-social-app.netlify.app",
      featured: false,
      category: "Full Stack",
      date: "2023"
    },
    {
      id: 4,
      title: "3D Portfolio Website",
      description: "An immersive 3D portfolio website with interactive elements and animations",
      longDescription: "A creative portfolio website featuring 3D graphics, smooth animations, and interactive elements. Built with Three.js and React Three Fiber.",
      image: "https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?w=800&h=600&fit=crop",
      technologies: ["React", "Three.js", "Framer Motion", "GSAP", "Blender"],
      githubUrl: "https://github.com/yourusername/3d-portfolio",
      liveUrl: "https://your-3d-portfolio.netlify.app",
      featured: false,
      category: "Frontend",
      date: "2023"
    }
  ]

  const categories = ["All", "Full Stack", "Frontend", "Data Science"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collection of projects that showcase my skills and passion for creating 
              innovative digital solutions.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4 p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>          {/* Projects Grid */}
          <motion.div 
            key={selectedCategory} // Add key to force re-animation when category changes
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={`${selectedCategory}-${project.id}`} // Unique key for each category-project combination
                variants={itemVariants}
                className={`group relative ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
                whileHover={{ y: -5 }}
              >
                <div className="glass-card overflow-hidden h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Project Links */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                        aria-label="View source code"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={16} className="text-gray-400" />
                      <span className="text-sm text-gray-400">{project.date}</span>
                      <Tag size={16} className="text-gray-400 ml-4" />
                      <span className="text-sm text-gray-400">{project.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">
                      {project.featured ? project.longDescription : project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-primary-500/20 text-primary-300 rounded-full border border-primary-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        className="flex-1 py-2 px-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-center rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                      >
                        View Live
                      </a>
                      <a
                        href={project.githubUrl}
                        className="py-2 px-4 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
