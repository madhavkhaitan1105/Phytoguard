import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaMoon, FaSun, FaLeaf } from 'react-icons/fa'

export default function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Detection', path: '/detection' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 backdrop-blur-md ${
        darkMode 
          ? 'bg-gray-900/80 border-b border-gray-700' 
          : 'bg-white/80 border-b border-green-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="text-2xl"
            >
              <FaLeaf className="text-green-500" />
            </motion.div>
            <span className={`text-xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Phytoguard
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? darkMode ? 'text-green-400' : 'text-green-600'
                    : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-colors ${
              darkMode 
                ? 'text-yellow-400 hover:bg-gray-800' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}
  