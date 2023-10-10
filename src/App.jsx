import { Outlet, Link, useLocation } from "react-router-dom"

import Header from "./Components/Header/Header"
import useDataFetcher from "./utils/useDataFetcher"

export default function App() {
  const location = useLocation()

  const { data, error, loading } = useDataFetcher(
    "https://fakestoreapi.com/products/categories"
  )

  return (
    <>
      <Header />
      <div>
        {location.pathname === "/" && !loading && data ? (
          <>
            <p>
              Welcome to SCart
              <hr />
            </p>
            <h2>Pick one of the categories we provide</h2>
            {data.map((el) => {
              return (
                <Link key={el} to={`/category/${el}`}>
                  {el}
                </Link>
              )
            })}
          </>
        ) : !loading && error ? (
          <p>Encountered a network error</p>
        ) : (
          <Outlet />
        )}
      </div>
    </>
  )
}
