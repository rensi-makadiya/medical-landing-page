import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "./layout/AppLayout"
import { Home } from "./Pages/Home"

export const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about"
        },
        {
          path:"/application"
        },
        {
          path:"/history"
        }
      ]

    }
  ])
  return (

    <>
<RouterProvider router={router}/>
    </>
  )
}
