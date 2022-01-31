import styles from '../styles/Controls.module.css'
import { useContext} from "react"
import TasksContext from "../contexts/tasks"

const ClearAll = (props) => {

    const [tasks, setTasks] = useContext(TasksContext)

    const handleClear = async () => {
        const resp = await fetch('http://localhost:3000/api/todo/', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'  }
        })

        if(resp.status == 200){
            setTasks([])
            return
        }
        
        alert(`[HTTP ${resp.status}]`)
    }

    if(tasks.length == 0){
        return ("")
    }

    return (
        <div className={styles.clearAll}>
            <button onClick={handleClear}>Clear all</button>
        </div>
    )
}

export default ClearAll