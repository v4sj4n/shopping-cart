import { Outlet, Link, useLocation } from "react-router-dom"

import Header from "./Components/Header/Header"
import useProductsFetcher from "./utils/useProductsFetcher"

export default function App() {
  const location = useLocation()

  const { data, error, loading } = useProductsFetcher()

  return (
    <>
      <Header />
      <div>
        Welcome to SCart
        <hr />
        {location.pathname === "/" && !loading && data ? (
          <Link to="/categories">Check the categories of our products</Link>
        ) : !loading && error ? (
          <p>Encountered a network error</p>
        ) : (
          <Outlet />
        )}
      </div>
    </>
  )
}
