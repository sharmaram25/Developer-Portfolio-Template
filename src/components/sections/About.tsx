import { motion } from 'framer-motion'
import { Code, Palette, Rocket, Users } from 'lucide-react'

export default function About() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js", "Framer Motion"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Tools & Cloud",
      items: ["Docker", "AWS", "Vercel", "Git", "Figma", "VS Code"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Team Leadership", "UI/UX Design", "Project Management"],
      color: "from-orange-500 to-red-500"
    }
  ]

  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time."
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful, intuitive interfaces that users love to interact with."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and efficiency without compromising on quality."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with teams to deliver exceptional results together."
    }
  ]

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
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
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
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a passionate developer who loves creating digital experiences that make a difference. 
              With years of experience in modern web technologies, I bring ideas to life through code.
            </p>
          </motion.div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Personal Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
              <div className="prose prose-lg text-gray-600">
                <p>
                  My journey into web development started with curiosity and has evolved into a passion 
                  for creating meaningful digital experiences. I believe in the power of technology to 
                  solve real-world problems and improve people's lives.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community. I'm always 
                  eager to learn and grow in this ever-evolving field.
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {values.map((value, _index) => (
                <motion.div
                  key={value.title}
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                  variants={itemVariants}
                >
                  <value.icon className="w-8 h-8 text-primary-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Skills & <span className="gradient-text">Technologies</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, _index) => (
                <motion.div
                  key={skill.category}
                  className="relative group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="glass-card p-6 h-full">
                    <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg mb-4 flex items-center justify-center`}>
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-4">{skill.category}</h4>
                    <div className="space-y-2">
                      {skill.items.map((item) => (
                        <div
                          key={item}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 inline-block mr-2 mb-2"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
