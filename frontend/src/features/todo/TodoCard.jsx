import { useState } from "react"

const TodoCard = ({ todos, setTodos, setEditData, editData, setFormdata }) => {


  // delete
  const handle_delete = (id) => {
    let filter_todo = todos.filter((ele) => ele.id !== id)
    setTodos(filter_todo)
  }

  const handle_edit = (ele) => {
    setEditData(ele)
    setFormdata({
      title: ele.title,
      priority: ele.priority,
      completed: ele.completed
    })
  }


  const handle_checkbox = (id) => {
    const update_checkbox = todos.map((item) => item.id == id ?

      { ...item, completed: !item.completed }

      : item)

    setTodos(update_checkbox)
  }


  return (
    <>
      {todos.length == 0 ? "No data available....." : todos.map((ele) => (
        <div key={ele.id} className="todo-card">

          <div className="title-div">
            <h3>Ttitle : {ele.title}</h3>

            <input checked={ele.completed} type="checkbox" name="completed" onChange={() => handle_checkbox(ele.id)} />

          </div>
          <p>Desc : {ele.description}</p>
          <p style={{ color: ele.completed ? "green" : "red" }}>Status : {ele.completed ? "completed" : "pending"}</p>
          <p>Priority : {ele.priority}</p>
          <div className="action-btn">
            <button id="edit-btn" onClick={() => handle_edit(ele)}>Edit</button>
            <button id="delete-btn" onClick={() => handle_delete(ele.id)}>Delete</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default TodoCard