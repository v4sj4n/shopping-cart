import Card from "../../Components/Card/Card"
import useDataFetcher from "../../utils/useDataFetcher"
import { useOutletContext } from "react-router-dom"

export default function AllProducts() {
  const { data, error, loading } = useDataFetcher(
    `https://fakestoreapi.com/products`
  )
  const { addProduct } = useOutletContext()

  if (loading) return <p>Loading...</p>
  if (error)
    return (
      <p>
        Encountered an error, possibly the name of the category is nonexistent
      </p>
    )
  return (
    <div>
      <h1>All Products</h1>
      {data &&
        data.map((el) => (
          <Card
            key={el.id}
            id={el.id}
            title={el.title}
            imageSrc={el.image}
            category={el.category}
            price={el.price}
            count={1}
            addToCart={() => {
              const elToAdd = {
                id: el.id,
                title: el.title,
                imageSrc: el.image,
                category: el.category,
                price: el.price,
                count: 1,
              }
              addProduct(elToAdd)
            }}
          />
        ))}
    </div>
  )
}
