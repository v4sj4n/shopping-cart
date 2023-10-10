import Card from "../../Components/Card/Card"
import useDataFetcher from "../../utils/useDataFetcher"

export default function AllProducts() {
  const { data, error, loading } = useDataFetcher(
    `https://fakestoreapi.com/products`
  )

  if (loading) return <p>Loading...</p>
  if (error)
    return (
      <p>
        Encountered an error, possibly the name of the category is nonexistent
      </p>
    )
  return (
    <div>
      <h1>AllProducts</h1>
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
  )
}
