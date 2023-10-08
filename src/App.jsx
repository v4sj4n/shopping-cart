import { Link } from "react-router-dom"

export default function App() {
  return (
    <div>
      Welcome to SCart
      <hr />
      <Link to="/categories">Check the categories of our products</Link>
    </div>
  )
}
