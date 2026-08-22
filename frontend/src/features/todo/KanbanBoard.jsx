


const KanbanBoard = ({ todos, setTodos }) => {

    const pendingTodos = todos.filter((ele) => !ele.status)
    const completedTodos = todos.filter((ele) => ele.status)


    const handle_drag_start = (e, id) => {
        e.dataTransfer.setData("todoId", id)
    }


    const handle_drop = (e, status) => {
        e.preventDefault()

        const todoId = Number(e.dataTransfer.getData("todoId"))

        const updateTodos = todos.map((item) => item.id == todoId ? {
            ...item, status: status == "completed"
        } : item)

        setTodos(updateTodos)
    }



    const handle_drag_over = (e) => {
        e.preventDefault()

    }


    return (
        <div className='kanboard-cont'>
            <h1>KanbanBoard</h1>

            <div className='main-div'>

                <div className='header'>
                    <h1>Pending</h1>
                    <h1>Completed</h1>
                </div>


                <div className='container'>

                    {/* Pending Column */}

                    <div className="pendingdiv" onDragOver={handle_drag_over} onDrop={(e) => handle_drop(e, "pending")}>
                        {pendingTodos.length > 0 && pendingTodos.map((ele) => (
                            <div
                                draggable
                                onDragStart={(e) => handle_drag_start(e, ele.id)}
                                key={ele.id} className='pending-item' >
                                <h5>title : {ele.title}</h5>
                                <p style={{ color: ele.status ? "green" : "red" }}>status : {ele.status ? "completed" : "pending"}</p>

                                <h6>priority : {ele.priority}</h6>
                            </div>
                        ))}
                    </div>

                    {/* Completed Column */}

                    <div className="completeddiv" onDragOver={handle_drag_over} onDrop={(e) => handle_drop(e, "completed")}>
                        {completedTodos.length > 0 && completedTodos.map((ele) => (
                            <div key={ele.id} draggable onDragStart={(e) => handle_drag_start(e, ele.id)}
                                className='coml-item'>
                                <h5>title : {ele.title}</h5>
                                <p style={{ color: ele.status ? "green" : "red" }}>status : {ele.status ? "completed" : "pending"}</p>
                                <h6>priority : {ele.priority}</h6>
                            </div>
                        ))}
                    </div>

                </div>


            </div>

        </div>
    )
}

export default KanbanBoard