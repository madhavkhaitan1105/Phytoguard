import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaLeaf, FaMagic, FaChartLine, FaUpload, FaSearch, FaCheckCircle } from 'react-icons/fa'

export default function Home() {
  const features = [
    {
      icon: <FaLeaf className="text-4xl text-green-500" />,
      title: "Early Detection",
      description: "Identify plant diseases before they spread, protecting your crops and maximizing yield."
    },
    {
      icon: <FaMagic className="text-4xl text-green-500" />,
      title: "Easy to Use",
      description: "Simply upload a photo of your plant and get instant, accurate disease detection results."
    },
    {
      icon: <FaChartLine className="text-4xl text-green-500" />,
      title: "Scalable",
      description: "Perfect for individual farmers, agricultural companies, and research institutions."
    },
    {
      icon: <FaCheckCircle className="text-4xl text-green-500" />,
      title: "Free to Try",
      description: "Start detecting plant diseases today with our free trial - no credit card required."
    }
  ]

  const steps = [
    {
      icon: <FaUpload className="text-3xl text-green-500" />,
      title: "Upload",
      description: "Take or upload a clear photo of your plant's affected area"
    },
    {
      icon: <FaSearch className="text-3xl text-green-500" />,
      title: "Analyze",
      description: "Our AI analyzes the image using advanced machine learning algorithms"
    },
    {
      icon: <FaCheckCircle className="text-3xl text-green-500" />,
      title: "Get Results",
      description: "Receive instant diagnosis with confidence scores and treatment recommendations"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Floating Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="floating-shape w-32 h-32 top-20 left-10"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="floating-shape w-24 h-24 top-40 right-20"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="floating-shape w-40 h-40 bottom-20 left-1/4"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Phytoguard</span>
            <br />
            <span className="text-gray-800 dark:text-white">Smart Plant Health Detection</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
          >
            Upload plant images. Detect diseases instantly. Protect your crops.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/detection"
              className="inline-block"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 bg-gradient-to-r from-green-400 via-green-500 to-green-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">Try Detection</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-green-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <motion.div
                  className="absolute inset-0 bg-white opacity-20"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Why Choose Phytoguard?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Advanced AI technology meets agricultural expertise to provide the most accurate plant disease detection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl text-center group hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-4 flex justify-center"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get started with plant disease detection in just three simple steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg"
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
                
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-400 to-green-600 transform translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
