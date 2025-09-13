import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaLeaf, FaBrain, FaChartLine, FaCode, FaUsers, FaRocket, FaAward } from 'react-icons/fa'

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Lead AI Researcher",
      bio: "PhD in Computer Science with 8+ years in machine learning and computer vision. Specializes in plant pathology and agricultural AI.",
      image: "👩‍🔬"
    },
    {
      name: "Marcus Rodriguez",
      role: "Full-Stack Developer",
      bio: "Full-stack engineer with expertise in React, Node.js, and cloud technologies. Passionate about building scalable agricultural solutions.",
      image: "👨‍💻"
    },
    {
      name: "Dr. Emily Watson",
      role: "Plant Pathologist",
      bio: "Botanist and plant disease expert with 12+ years of field experience. Provides domain expertise for accurate disease identification.",
      image: "👩‍🌾"
    },
    {
      name: "Alex Kim",
      role: "Product Manager",
      bio: "Product strategist focused on user experience and agricultural technology adoption. Bridges the gap between technology and farmers' needs.",
      image: "👨‍💼"
    }
  ]

  const timeline = [
    {
      year: "2023",
      title: "Project Inception",
      description: "Initial research and development of plant disease detection algorithms using deep learning."
    },
    {
      year: "2024 Q1",
      title: "MVP Development",
      description: "Built first working prototype with 85% accuracy on common plant diseases."
    },
    {
      year: "2024 Q2",
      title: "Dataset Expansion",
      description: "Collected and labeled 50,000+ plant images across 200+ disease categories."
    },
    {
      year: "2024 Q3",
      title: "Model Optimization",
      description: "Achieved 94% accuracy through advanced neural network architectures and data augmentation."
    },
    {
      year: "2024 Q4",
      title: "Platform Launch",
      description: "Public release of Phytoguard with web interface and mobile-responsive design."
    }
  ]

  const techStack = [
    { name: "React", icon: <FaReact className="text-4xl text-blue-500" />, description: "Frontend Framework" },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-600" />, description: "Backend Runtime" },
    { name: "Python", icon: <FaPython className="text-4xl text-yellow-500" />, description: "ML & AI" },
    { name: "TensorFlow", icon: <FaBrain className="text-4xl text-orange-500" />, description: "Deep Learning" },
    { name: "Tailwind CSS", icon: <FaCode className="text-4xl text-cyan-500" />, description: "Styling" },
    { name: "Framer Motion", icon: <FaChartLine className="text-4xl text-purple-500" />, description: "Animations" }
  ]

  const stats = [
    { number: "94%", label: "Detection Accuracy" },
    { number: "200+", label: "Disease Categories" },
    { number: "50K+", label: "Training Images" },
    { number: "10K+", label: "Happy Users " }
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            About Phytoguard
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're revolutionizing agriculture through AI-powered plant disease detection, 
            helping farmers protect their crops and maximize yields with cutting-edge technology.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center glass-card p-6 rounded-2xl"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-2xl mb-20"
        >
          <div className="text-center mb-8">
            <FaLeaf className="text-5xl text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Our Mission
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            To democratize access to advanced plant disease detection technology, 
            empowering farmers worldwide to make informed decisions about crop health. 
            We believe that by combining artificial intelligence with agricultural expertise, 
            we can help reduce crop losses, increase food security, and support sustainable farming practices.
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A diverse team of experts in AI, agriculture, and technology working together 
              to solve real-world farming challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-green-600 dark:text-green-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From concept to reality - the evolution of Phytoguard.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-green-600"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.year}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 glass-card p-6 rounded-2xl">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Built with modern technologies to ensure scalability, performance, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass-card p-6 rounded-2xl text-center group hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 flex justify-center"
                >
                  {tech.icon}
                </motion.div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-2xl"
        >
          <div className="text-center mb-8">
            <FaAward className="text-5xl text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Our Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaUsers className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Farmer-First
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every feature is designed with farmers' needs and challenges in mind.
              </p>
            </div>
            
            <div className="text-center">
              <FaRocket className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Continuously pushing the boundaries of what's possible in agricultural AI.
              </p>
            </div>
            
            <div className="text-center">
              <FaLeaf className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Sustainability
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Committed to promoting sustainable farming practices and environmental protection.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
