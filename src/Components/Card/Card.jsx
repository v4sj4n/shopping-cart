import {Link} from "react-router-dom"
import styles from "./Card.module.css"
import PropTypes from "prop-types"

export default function Card(props) {
    return (
      <div className={styles.card}>
        <img src={props.imageSrc} alt={props.title} />
        <div>
          <Link to={`/product/${props.id}`}>
            <h2>{props.title}</h2>
          </Link>
          {props.category && <p>{props.category}</p>}
          {props.count && <p>{props.count}</p>}
          <h4>{props.price} €</h4>
          {props.addToCart && (
            <div>
              <button onClick={() => props.addToCart()}>Add to cart</button>
            </div>
          )}
        </div>
      </div>
    )
}

Card.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    count: PropTypes.number,
    imageSrc: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    addToCart: PropTypes.func

}
