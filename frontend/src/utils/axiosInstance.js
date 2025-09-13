import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api", // Django backend URL
  headers: {
    "Content-Type": "multipart/form-data",
  },
})

export default axiosInstance
