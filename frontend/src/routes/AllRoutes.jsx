import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ProductsPage from "../features/products/pages/ProductsPage"
import LoginPage from "../pages/LoginPage"
import SignupPage from "../pages/SignupPage"
import NotFoundPage from "../pages/NotFoundPage"
import TodoList from "../features/todo/TodoList"
import CounterApp from "../features/counter/CounterApp"

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path = "/products" element={<ProductsPage/>}/>
        <Route path = "/todos" element={<TodoList/>}/>
        <Route path = "/counter" element={<CounterApp/>}/>


        <Route path = "/login" element={<LoginPage/>}/>
        <Route path = "/signup" element={<SignupPage/>}/>


        <Route path = "*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes