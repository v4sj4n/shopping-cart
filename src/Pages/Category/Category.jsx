import { useParams } from "react-router-dom"
import styles from "./Category.module.css"
import useDataFetcher from "../../utils/useDataFetcher"
import Card from "../../Components/Card/Card"

export default function Categories() {
  const { categoryName } = useParams()

  const { data, error, loading } = useDataFetcher(
    `https://fakestoreapi.com/products/category/${categoryName}`
  )

  console.log(data)

  if (loading) return <p>Loading...</p>
  if (error)
    return (
      <p>
        Encountered an error, possibly the name of the category is nonexistent
      </p>
    )
  return (
    <>
      {data && (
        <div className={styles.category}>
          <h2>{categoryName}</h2>

          {data &&
            data.map((el) => (
              <Card
                key={el.id}
                title={el.title}
                imageSrc={el.image}
                category={el.category}
                price={el.price}
              />
            ))}
        </div>
      )}
    </>
  )
}
