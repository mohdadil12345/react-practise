import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ProductsPage from "../features/products/pages/ProductsPage"
import LoginPage from "../pages/LoginPage"
import SignupPage from "../pages/SignupPage"

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path = "/products" element={<ProductsPage/>}/>
        <Route path = "/login" element={<LoginPage/>}/>
        <Route path = "/signup" element={<SignupPage/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes