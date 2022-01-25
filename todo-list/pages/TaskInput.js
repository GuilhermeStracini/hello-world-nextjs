import { useState } from "react";

const TaskInput = (props) => 
{
    const [todoItem, setTodoItem] = useState("");

    const handleEnter = (event) => {
        if (event.key === "Enter")
        handleAdd();
    };

    const handleAdd = async () => {
        const resp = await fetch('http://localhost:3000/api/todo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'  },
            body: JSON.stringify({ newTask: todoItem }) 
        });
        setTodoItem("");
        props.setItems(await resp.json());        
    }
    
    return (
        <div>
            <label>Task:</label>
            <input type="text" value={todoItem} onChange={(e) => setTodoItem(e.target.value)} onKeyDown={handleEnter} />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default TaskInput