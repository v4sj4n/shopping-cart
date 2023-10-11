import { Outlet, Link, useLocation } from "react-router-dom"
import "./App.css"
import Header from "./Components/Header/Header"
import useDataFetcher from "./utils/useDataFetcher"
import { useState } from "react"

export default function App() {
  const location = useLocation()

  const { data, error, loading } = useDataFetcher(
    "https://fakestoreapi.com/products/categories"
  )
  const [sCartItems, setSCartItems] = useState([])

  const setSCartItemsHandler = (item) => {
    setSCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id
      )

      if (existingItemIndex !== -1) {
        return prevItems.map((cartItem, index) => {
          if (index === existingItemIndex) {
            return {
              ...cartItem,
              count: cartItem.count + item.count,
            }
          }
          return cartItem
        })
      } else {
        return [...prevItems, { ...item }]
      }
    })
  }

  return (
    <>
      <Header sItems={sCartItems} />
      <div>
        {location.pathname === "/" && !loading && data ? (
          <>
            <p style={{ fontSize: "1.25rem" }}>Welcome to SCart</p>
            <br />
            <h2>Pick one of the categories we provide</h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {data.map((el) => {
                return (
                  <Link
                    className="hovered-a"
                    key={el}
                    to={`/category/${el}`}
                    style={{
                      display: "inline-block",
                      fontSize: "2rem",
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    {el}
                  </Link>
                )
              })}
            </div>
          </>
        ) : !loading && error ? (
          <p>Encountered a network error</p>
        ) : (
          <Outlet
            context={{
              products: sCartItems,
              addProduct: setSCartItemsHandler,
              clearProducts: setSCartItems,
            }}
          />
        )}
      </div>
    </>
  )
}
