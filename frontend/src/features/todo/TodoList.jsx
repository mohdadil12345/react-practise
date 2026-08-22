
import { useEffect, useState } from "react"
import "../../styles/TodoList.scss"
import TodoCard from "./TodoCard"
import TodoForm from "./TodoForm"
import KanbanBoard from "./KanbanBoard"

export const initial = {
  title: "",
  priority: "",
  status: false,
  description: "Finish the product listing page with filters"
}

const TodoList = () => {

  const [todos, setTodos] = useState([])
  const [formData, setFormdata] = useState(initial)
  const [editData, setEditData] = useState(null)


  //local storage

  // get item
  useEffect(() => {
    let lsData = JSON.parse(localStorage.getItem("todolist"))

    if (lsData) {
      setTodos(lsData)
    }
  }, [])



  // set item
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todos))
  }, [todos])

  // Why two useEffects are better
  //   Component Mounted
  // ↓
  // Read localStorage
  // ↓
  // Set State
  // ↓
  // Never run again




  return (
    <div className="todo-list" >

      <h1>Todo with local storage</h1>
      <h4>Search and filter and pagination next and prev ....?????</h4>

      <TodoForm todos={todos} formData={formData} setTodos={setTodos} setFormdata={setFormdata} editData={editData} setEditData={setEditData} />

      <div className="todo-cont">

        <TodoCard todos={todos} setTodos={setTodos} editData={editData} setEditData={setEditData} setFormdata={setFormdata} />
      </div>


      <hr />

       <KanbanBoard todos={todos} setTodos={setTodos}/>




    </div>
  )
}

export default TodoList
