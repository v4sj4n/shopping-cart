import { useOutletContext, useParams } from "react-router-dom"
import useDataFetcher from "../../utils/useDataFetcher.jsx"
import { useState } from "react"
import styles from "./Item.module.css"
export default function Item() {
  const { itemID } = useParams()

  const { addProduct } = useOutletContext()
  const { data, loading, error } = useDataFetcher(
    `https://fakestoreapi.com/products/${itemID}`
  )

  const [count, setCount] = useState(1)

  const countHandler = (countStr) => {
    const count = Number(countStr)
    if (!isNaN(count) && count >= 1) {
      setCount(count)
    } else {
      setCount(1)
    }
  }
  if (loading) return <p>Loading...</p>
  if (error) return <p>Encountered an error, possibly a network one</p>
  return (
    <>
      <div className={styles.item}>
        <img src={data.image} />
        <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <p>{data.category}</p>
          <p>
            Rating: <strong>{data.rating.rate}</strong>
          </p>
          <h4>{data.price}</h4>
        </div>
      </div>
      <div className={styles.belowItem}>
        <div>
          <p>How many</p>
          <input
            type={"number"}
            placeholder={count}
            min={1}
            onChange={(e) => countHandler(Number(e.target.value))}
          />
        </div>
        <a
          onClick={() => {
            const elToAdd = {
              id: data.id,
              title: data.title,
              imageSrc: data.image,
              category: data.category,
              price: data.price,
              count: count,
            }

            addProduct(elToAdd)
            setCount(1)
            const inp = document.querySelector("input")
            inp.value = 1
          }}
        >
          Add item
        </a>
      </div>
    </>
  )
}
