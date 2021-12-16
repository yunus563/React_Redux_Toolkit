import Home from '../Pages/Home'
import Login from '../Pages/Login'
import About from '../Pages/About'


export const privateRouter = [
  {
    path: "/",
    element: <Home/>,
    exact: true,
  },
  {
    path: "/about",
    element: <About/>,
    exact: true,
  },
]

export const publicRouter = [
  {
    path:"/login",
    element: <Login/>,
    exact: true,
  }
]

