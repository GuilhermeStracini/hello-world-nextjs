import styles from '../styles/Tasks.module.css'
import Link from 'next/link'
import { useContext, useState, useEffect } from "react"
import TasksContext from "../contexts/tasks"
import useRemoveTask from "../hooks/removeTask"

const Tasks = () => {
    const [tasks, setTasks] = useContext(TasksContext)
    const [currentItemId, setCurrentItemId] = useState(0)
    const [data, removeTask] = useRemoveTask(currentItemId)

    useEffect(() => {
        if(currentItemId != 0){
            removeTask()
        }
    }, [currentItemId])

    useEffect(() => {
        if(data.status == 200){
            const remainingTasks = tasks.filter(task => task.id != currentItemId)
            setTasks(remainingTasks)
        }
    }, [data])

    return (
        <ul className={styles.tasksList}>
            {tasks?.map((item) => 
                <li key={item.id}>
                    <Link href="/details/[id]" as={`/details/${item.id}`}> 
                        {item.task} 
                    </Link>
                    <button onClick={() => setCurrentItemId(item.id)}>X</button>
                </li>)}
        </ul>
    ) 
}

export default Tasks