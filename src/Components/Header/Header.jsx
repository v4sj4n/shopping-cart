import { Link } from "react-router-dom"

import styles from "./Header.module.css"

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h2>
          <Link to="/">SCart</Link>
        </h2>

        <div>
            <Link to="categories">Categories</Link>
            <Link to="all-products">All Products</Link>
            <Link to="shopping-cart">Shopping Cart</Link>
        </div>
      </header>
    </>
  )
}
