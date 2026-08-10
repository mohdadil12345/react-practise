
import { useEffect, useState } from "react"
import "../../styles/TodoList.scss"

const initial = {
  title: "",
  priority: "",
}

const TodoList = () => {

  const [todos, setTodos] = useState([])
  const [formData, setFormdata] = useState(initial)

  // handle form data
  const handle_change = (e) => {
    const { name, value } = e.target

    setFormdata((prev) => ({
      ...prev,
      [name]: value
    }))
  }
//   prev → previous state object
// ...prev → keep existing fields
// [name] → dynamically choose which field to update
// value → new value for that field


// add todo
  const handle_submit = (e) => {
    e.preventDefault()

    let obj = {
      id: Math.random(),
      title: formData.title,
      description: "Finish the product listing page with filters",
      completed: false,
      priority: formData.priority
    }

    setTodos([...todos, obj])
    setFormdata(initial)

  }


  //local storage

  // get item
  useEffect(() => {
     let lsData = JSON.parse(localStorage.getItem("todolist"))
     if(lsData) {
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


// delete
const handle_delete = (id) => {
   let filter_todo = todos.filter((ele)=> ele.id !== id)
   setTodos(filter_todo)
}
  

  return (
    <div className="todo-list" >

      <form onSubmit={(e) => handle_submit(e)} className="header">
        <input name="title" value={formData.title} onChange={handle_change} type="text" className="todo-input" placeholder="title...." />
        <select value={formData.priority} name="priority" id="select-tag" onChange={handle_change}>
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button>Add</button>
      </form>



      <div className="todo-cont">

        {todos.length == 0 ? "No data available....." : todos.map((ele) => (
          <div key={ele.id} className="todo-card">

            <h3>Ttitle : {ele.title}</h3>
            <p>Desc : {ele.description}</p>
            <p>Complete : {ele.complete ? "completed" : "pending"}</p>
            <p>Priority : {ele.priority}</p>
            <div className="action-btn">
              <button>Edit</button>
              <button onClick={() => handle_delete(ele.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>



    </div>
  )
}

export default TodoList
