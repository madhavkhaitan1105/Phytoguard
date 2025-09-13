import axios from "axios"

// Placeholder axios instance for future backend integration
const axiosInstance = axios.create({
  baseURL: "https://api.phytoguard.com", // Future backend URL
  headers: {
    "Content-Type": "application/json",
  },
})

// Mock API functions for development
export const mockApi = {
  predict: async (formData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Return mock prediction data
    return {
      data: {
        disease: "Apple Scab",
        confidence: 94,
        description: "Apple scab is a common fungal disease that affects apple trees.",
        treatment: "Apply fungicide treatments in early spring.",
        severity: "Moderate"
      }
    }
  }
}

export default axiosInstance
