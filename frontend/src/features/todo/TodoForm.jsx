import React from 'react'
import { initial } from './TodoList'

const TodoForm = ({ todos, formData, setTodos, setFormdata, editData, setEditData }) => {

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

        if (!formData.title.trim() || !formData.priority) {
            alert("title and priority fields are required")
            return
        }

        if (editData) {
            const update_todo = todos.map((item) =>
                item.id === editData.id ?

                    { ...item, ...formData } : item
            )
            setTodos(update_todo)
            setEditData(null)

        }

        else {
            let obj = {
                id: Date.now(),
                title: formData.title,
                description: formData.description,
                priority: formData.priority,
                status: formData.status
            }
            setTodos([...todos, obj])
        }
        setFormdata(initial)
    }

    return (
        <>
            <form onSubmit={(e) => handle_submit(e)} className="header">

                <input name="title" value={formData.title} onChange={handle_change} type="text" className="todo-input" placeholder="title...." />

                <select value={formData.priority} name="priority" id="select-tag" onChange={handle_change}>
                    <option value="">Select Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <button>{editData ? "Update Todo" : "Add Todo"}</button>
            </form>
        </>
    )
}

export default TodoForm