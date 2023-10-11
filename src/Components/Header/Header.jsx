import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import Icon from "@mdi/react"
import { mdiShopping } from "@mdi/js"

import styles from "./Header.module.css"

export default function Header(props) {
  let sum = props.sItems.reduce(function (accumulator, curValue) {
    return accumulator + curValue.count
  }, 0)
  return (
    <>
      <header className={styles.header}>
        <h2>
          <Link to="/">SCart</Link>
        </h2>

        <div>
          <Link to="all-products">All Products</Link>
          <Link to="shopping-cart">
            <Icon path={mdiShopping} size={1.2} />

            <span>{sum}</span>
          </Link>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  sItems: PropTypes.array,
}
