import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaUpload, FaTimes, FaSpinner, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'

export default function Detection() {
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef(null)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleFile = (file) => {
    if (file && file.type.startsWith('image/')) {
      setImage(file)
      const reader = new FileReader()
      reader.onload = (e) => setPreview(e.target.result)
      reader.readAsDataURL(file)
      setResult(null)
    }
  }

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const removeImage = () => {
    setImage(null)
    setPreview(null)
    setResult(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const mockAnalyze = async () => {
    setLoading(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Mock result data
    const mockResults = [
      {
        disease: "Apple Scab",
        confidence: 94,
        description: "Apple scab is a common fungal disease that affects apple trees. It causes dark, scabby lesions on leaves and fruit.",
        treatment: "Apply fungicide treatments in early spring before bud break. Remove fallen leaves and fruit to reduce overwintering spores. Prune trees to improve air circulation.",
        severity: "Moderate"
      },
      {
        disease: "Potato Late Blight",
        confidence: 87,
        description: "Late blight is a devastating disease that can quickly destroy entire potato crops. It's caused by the water mold Phytophthora infestans.",
        treatment: "Apply copper-based fungicides preventively. Ensure good drainage and avoid overhead watering. Remove and destroy infected plants immediately.",
        severity: "High"
      },
      {
        disease: "Tomato Bacterial Spot",
        confidence: 91,
        description: "Bacterial spot is caused by Xanthomonas bacteria and affects tomato leaves, stems, and fruit. It's most common in warm, humid conditions.",
        treatment: "Use disease-free seeds and transplants. Apply copper-based bactericides. Avoid overhead watering and improve air circulation.",
        severity: "Moderate"
      },
      {
        disease: "Healthy Plant",
        confidence: 96,
        description: "No signs of disease detected. Your plant appears to be healthy and thriving.",
        treatment: "Continue current care practices. Monitor regularly for any changes in appearance.",
        severity: "None"
      }
    ]
    
    const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)]
    setResult(randomResult)
    setLoading(false)
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Plant Disease Detection
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Upload a clear photo of your plant to get instant disease detection and treatment recommendations.
          </p>
        </motion.div>

        {/* Upload Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="gradient-border mb-8"
        >
          <div className="glass-card p-8 rounded-2xl">
            {!preview ? (
              <div
                className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                  dragActive
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                    : 'border-gray-300 dark:border-gray-600 hover:border-green-400'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <motion.div
                  animate={{ y: dragActive ? -5 : 0 }}
                  className="space-y-4"
                >
                  <FaUpload className="text-6xl text-gray-400 mx-auto" />
                  <div>
                    <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Drop your image here
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      or click to browse files
                    </p>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg hover:from-green-500 hover:to-green-700 transition-all duration-300"
                    >
                      Choose File
                    </button>
                  </div>
                </motion.div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="relative">
                  <motion.img
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    src={preview}
                    alt="Uploaded plant"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    style={{ transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)' }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={removeImage}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
                  >
                    <FaTimes />
                  </motion.button>
                </div>
                
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={mockAnalyze}
                    disabled={loading}
                    className="px-8 py-4 bg-gradient-to-r from-green-400 via-green-500 to-green-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center space-x-2">
                        <FaSpinner className="animate-spin" />
                        <span>Analyzing...</span>
                      </span>
                    ) : (
                      'Analyze Plant'
                    )}
                  </motion.button>
                </div>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
            />
          </div>
        </motion.div>

        {/* Loading State */}
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-card p-8 rounded-2xl mb-8"
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 mx-auto mb-4"
                >
                  <FaSpinner className="text-4xl text-green-500" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Analyzing Your Plant
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our AI is examining your plant image for signs of disease...
                </p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full shimmer"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Result Card */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                    result.severity === 'None' 
                      ? 'bg-green-100 dark:bg-green-900/30' 
                      : result.severity === 'Moderate'
                      ? 'bg-yellow-100 dark:bg-yellow-900/30'
                      : 'bg-red-100 dark:bg-red-900/30'
                  }`}
                >
                  {result.severity === 'None' ? (
                    <FaCheckCircle className="text-3xl text-green-500" />
                  ) : (
                    <FaExclamationTriangle className={`text-3xl ${
                      result.severity === 'Moderate' ? 'text-yellow-500' : 'text-red-500'
                    }`} />
                  )}
                </motion.div>
                
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {result.disease}
                </h2>
                
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <span className="text-sm text-gray-600 dark:text-gray-300">Confidence:</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${result.confidence}%` }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className={`h-2 rounded-full ${
                          result.confidence >= 90 
                            ? 'bg-gradient-to-r from-green-400 to-green-600'
                            : result.confidence >= 70
                            ? 'bg-gradient-to-r from-yellow-400 to-yellow-600'
                            : 'bg-gradient-to-r from-red-400 to-red-600'
                        }`}
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-800 dark:text-white">
                      {result.confidence}%
                    </span>
                  </div>
                </div>

                {result.severity !== 'None' && (
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    result.severity === 'Moderate'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                      : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                  }`}>
                    {result.severity} Severity
                  </span>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    Description
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {result.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    Treatment Recommendations
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {result.treatment}
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 text-center"
              >
                <button
                  onClick={() => {
                    setImage(null)
                    setPreview(null)
                    setResult(null)
                    if (fileInputRef.current) {
                      fileInputRef.current.value = ''
                    }
                  }}
                  className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Analyze Another Plant
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
