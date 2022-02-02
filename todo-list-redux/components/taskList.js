import store from "../store/store"
import EditableTask from "../components/editableTask"
import React, { useState } from "react"
import styles from "../styles/TaskList.module.css"

const TaskList = () => {

    const [tasks, setTasks] = useState(store.getState().tasks)
    
    const updateState = () => setTasks(store.getState().tasks)

    store.subscribe(updateState)

    return (
        <ul className={styles.taskList}>
            {tasks.map((task) => 
                <li key={task.id}>
                    <EditableTask value={task.task} id={task.id} />                
                </li>               
            )}
        </ul>
    )
}

export default TaskList