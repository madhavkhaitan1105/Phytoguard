import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Detection from './pages/Detection'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode')
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-emerald-50'}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detection" element={<Detection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

  


