import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import Header from "./Components/Header/Header"
import AllProducts from "./Pages/AllProducts/AllProducts"
import Categories from "./Pages/Categories/Categories"
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart"


export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { index: true, element: <App /> },
        { path: "all-products", element: <AllProducts /> },
        { path: "categories", element: <Categories /> },
        { path: "shopping-cart", element: <ShoppingCart /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
