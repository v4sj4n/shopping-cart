import { useEffect, useState } from "react"

export default function useProductsFetcher() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const dataFetcher = async () => {
      await fetch("https://faketoreapi.com/products", { mode: "cors" })
        .then((response) => response.json())
        .then((response) => {
          setData(response)
          setLoading(false)
        })
        .catch((err) => {
          console.error(err)
          setError(true)
          setLoading(false)
        })
    }
    dataFetcher()
  }, [])

  return { data, error, loading }
}
