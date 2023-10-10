import { useEffect, useState } from "react"

export default function useDataFetcher(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const dataFetcher = async () => {
      await fetch(url, { mode: "cors" })
        .then((response) => response.json())
        .then((response) => {
          if (response.length > 1) {
            setData(response)
            setLoading(false)
          } else {
            setError(true)
            setLoading(false)
          }
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
