import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import AllProducts from "./Pages/AllProducts/AllProducts"
import Categories from "./Pages/Categories/Categories"
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart"

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "all-products", element: <AllProducts /> },
        { path: "categories", element: <Categories /> },
        { path: "shopping-cart", element: <ShoppingCart /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
