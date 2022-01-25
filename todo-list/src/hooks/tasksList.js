import TaskInput from './taskInput'
import Tasks from './tasks'
import { useState } from "react";

const ToDoList = (props) => 
{
    const [items, setItems] = useState(props.items);
    
    return (
        <div>
            <TaskInput setItems={setItems} />
            <Tasks items={items} setItems={setItems} />
        </div>
    )
}

export default ToDoList