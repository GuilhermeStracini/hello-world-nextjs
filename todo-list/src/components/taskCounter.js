import styles from '../styles/Controls.module.css'
import { useContext } from "react"
import TasksContext from "../contexts/tasks"

const TaskCounter = () => {
    
    const [tasks] = useContext(TasksContext)
    
    return (<div className={styles.counter}>{tasks.length} task{tasks.length == 1 ? "" : "s"}</div>)
}

export default TaskCounter