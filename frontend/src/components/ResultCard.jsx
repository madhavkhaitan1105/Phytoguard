export default function ResultCard({ result }) {
    return (
      <div className="mt-6 p-4 border rounded bg-gray-100">
        <h2 className="font-semibold">Prediction:</h2>
        <p><strong>Disease:</strong> {result.disease}</p>
        <p><strong>Confidence:</strong> {result.confidence}%</p>
      </div>
    )
  }
  