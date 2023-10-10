import styles from "./Card.module.css"
import PropTypes from "prop-types"

export default function Card({ title, imageSrc, category, price }) {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{category}</p>
        <h4>{price} €</h4>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.string,
}
