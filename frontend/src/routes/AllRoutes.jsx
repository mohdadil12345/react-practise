import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import SignupPage from "../pages/SignupPage"
import NotFoundPage from "../pages/NotFoundPage"
import TodoList from "../features/todo/TodoList"
import CounterApp from "../features/counter/CounterApp"
import Calculator from "../features/calculator/Calculator"
import Timers from "../features/timer/Timers"
import ProductList from "../features/products/components/ProductList"
import ProductDetails from "../features/products/pages/ProductDetails"
import DataTable from "../features/datatable/DataTable"
import DynamicField from "../pages/DynamicField"
import DebounceSearch from "../pages/DebounceSearch"
import KanbanBoard from "../features/todo/KanbanBoard"

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
        <Route path = "/products" element={<ProductList/>}/>
        <Route path = "/todos" element={<TodoList/>}/>
        <Route path = "/counter" element={<CounterApp/>}/>
        <Route path = "/calculator" element={<Calculator/>}/>
        <Route path = "/timer" element={<Timers/>}/>
        <Route path = "/products/:id" element={<ProductDetails/>}/>
        <Route path = "/datatable" element={<DataTable/>}/>
        <Route path = "/dynamic-fields" element={<DynamicField/>}/>
        <Route path = "/debounce" element={<DebounceSearch/>}/>
        <Route path = "/kanban" element={<KanbanBoard/>}/>


        <Route path = "/login" element={<LoginPage/>}/>
        <Route path = "/signup" element={<SignupPage/>}/>


        <Route path = "*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes






// .todo-cont {
//   padding: 24px;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 20px;
//   background: #f8fafc;
//   min-height: 100vh;

//   .todo-card {
//     background: #ffffff;
//     border: none;
//     padding: 20px;
//     border-radius: 16px;
//     display: flex;
//     flex-direction: column;
//     gap: 12px;
//     box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
//     transition: all 0.3s ease;
//     cursor: pointer;

//     &:hover {
//       transform: translateY(-6px);
//       box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
//     }

//     h3 {
//       margin: 0;
//       font-size: 1.2rem;
//       color: #1e293b;
//       line-height: 1.4;
//     }

//     p {
//       margin: 0;
//       color: #64748b;
//       font-size: 0.95rem;
//       line-height: 1.5;
//     }

//     p:nth-of-type(2) {
//       width: fit-content;
//       padding: 6px 12px;
//       border-radius: 999px;
//       font-weight: 600;
//       font-size: 0.85rem;
//       background: #dcfce7;
//       color: #166534;
//     }

//     p:last-child {
//       width: fit-content;
//       padding: 6px 12px;
//       border-radius: 999px;
//       background: #fee2e2;
//       color: #b91c1c;
//       font-weight: 600;
//       font-size: 0.85rem;
//     }
//   }
// }