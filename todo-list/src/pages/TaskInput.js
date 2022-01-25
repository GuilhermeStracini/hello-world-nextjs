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

        var content = await resp.json();

        if(resp.status == 200){
            setTodoItem("");
            props.setItems(content);
        }
        
        alert(`[HTTP ${resp.status}] ${content.error}`);
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