import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import AllProducts from "./Pages/AllProducts/AllProducts"
import Category from "./Pages/Category/Category"
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart"

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "all-products", element: <AllProducts /> },
        {
          path: "category/:categoryName",
          element: <Category />,
        },
        { path: "shopping-cart", element: <ShoppingCart /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
