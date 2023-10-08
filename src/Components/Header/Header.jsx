import { Outlet, Link } from "react-router-dom"

import styles from "./Header.module.css"

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h2>
          <Link to="/">SCart</Link>
        </h2>

        <ul>
          <li>
            <Link to="categories">Categories</Link>
          </li>
          <li>
            <Link to="all-products">All Products</Link>
          </li>
          <li>
            <Link to="shopping-cart">Shopping Cart</Link>
          </li>
        </ul>
      </header>

      <Outlet />
    </>
  )
}
