import styles from "./Card.module.css"

export default function Card({title, imageSrc, category, price}) {
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
