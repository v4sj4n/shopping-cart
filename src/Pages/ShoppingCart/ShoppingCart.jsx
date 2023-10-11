import styles from "./ShoppingCart.module.css"
import { useOutletContext } from "react-router-dom"
import Card from "../../Components/Card/Card"
import { Link } from "react-router-dom"

export default function ShoppingCart() {
  const { products, clearProducts } = useOutletContext()

  return (
    <div className={styles.shoppingCart}>
      <h2>Shopping Cart</h2>
      {products.length > 0 ? (
        products.map((prod) => (
          <Card
            key={prod.id}
            title={prod.title}
            count={prod.count}
            imageSrc={prod.imageSrc}
            category={prod.category}
            price={Number(prod.price) * Number(prod.count)}
          />
        ))
      ) : (
        <p>
          You have selected no items, go back to the{" "}
          <Link to={"/"}>main page</Link>
        </p>
      )}
      <a
        target="blank"
        href="https://www.youtube.com/watch?v=Tt7bzxurJ1I"
        onClick={() => clearProducts(0)}
      >
        Buy Now
      </a>
    </div>
  )
}
