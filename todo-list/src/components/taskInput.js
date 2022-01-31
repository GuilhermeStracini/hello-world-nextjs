import { useContext, useState, useEffect } from "react";
import styles from '../styles/TaskInput.module.css'
import TasksContext from "../contexts/tasks"
import useAddTask from "../hooks/addTask"

const TaskInput = () => 
{
    const [tasks, setTasks] = useContext(TasksContext)
    const [todoItem, setTodoItem] = useState("");
    const [data, createTask] = useAddTask(todoItem)

    const handleChange = (event) => setTodoItem(event.target.value)

    const handleEnter = (event) => {
        if (event.key === "Enter")
        {
            createTask();
        }
    }

    useEffect(() => {
        if(data.tasks)
        {
            setTasks(data.tasks)
            setTodoItem("")
        }else if(data.error){
            alert(data.error)
        }
    }, [data])
    
    return (
        <div className={styles.inputSection}>
            <label>Task:</label>
            <input value={todoItem} onChange={handleChange} onKeyDown={handleEnter} required />
            <button onClick={createTask}>Add</button>
        </div>
    )
}

export default TaskInput