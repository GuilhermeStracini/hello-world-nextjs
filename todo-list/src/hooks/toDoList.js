import TaskInput from './taskInput'
import Tasks from './tasks'
import { useState } from "react";
import TaskCounter from './taskCounter';
import ClearAll from './clearAll';

const ToDoList = (props) => 
{
    const [items, setItems] = useState(props.items);
    
    return (
        <div>
            <TaskCounter items={items.length} />
            <ClearAll items={items.length} setItems={setItems} />
            <TaskInput setItems={setItems} />
            <Tasks items={items} setItems={setItems} />
        </div>
    )
}

export default ToDoList