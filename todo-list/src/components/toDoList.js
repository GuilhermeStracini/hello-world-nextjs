import TaskInput from './taskInput'
import Tasks from './tasks'
import Controls from "./controls"


const ToDoList = () => 
{    
    return (
        <div>
            <Controls />
            <TaskInput />
            <Tasks />
        </div>
    )
}

export default ToDoList