import { useState } from "react"
import axios from "../utils/axiosInstance"
import ResultCard from "./ResultCard"

export default function UploadForm() {
  const [image, setImage] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!image) return

    const formData = new FormData()
    formData.append("image", image)

    try {
      setLoading(true)
      const res = await axios.post("/predict", formData)
      setResult(res.data)
    } catch (err) {
      alert("Error: " + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 shadow rounded">
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="mb-4"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {loading ? "Predicting..." : "Submit Image"}
        </button>
      </form>

      {result && <ResultCard result={result} />}
    </div>
  )
}
