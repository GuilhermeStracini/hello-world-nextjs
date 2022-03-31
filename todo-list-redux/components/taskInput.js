import { useState, useEffect, Fragment } from "react"
import InputTask from "./input"
import useCreateTask from "../hooks/useCreateTask"
import { ADD_TASK } from "../store/features/tasks/actions"
import store from "../store/store"


const TaskInput = () => {

    const [currentValue, setCurrentValue] = useState('')
    const [createTask, createStatus, createError, taskAdded] = useCreateTask()

    useEffect(() => {
        if(createStatus === "idle") {
            return
        }

        switch(createStatus){
            case "fetched":
                if(taskAdded != null)
                {
                    store.dispatch({ type: ADD_TASK, payload: taskAdded})
                    setCurrentValue('')
                }
            break
            
            case "error":
                if(createError != "") {
                    alert(createError)
                }
            break
        }
    }, [createStatus, createError, taskAdded])

    const onChange = (e) => setCurrentValue(e.target.value)

    const onSave = () => {

        if(currentValue !== ""){
            createTask(currentValue)
        }
    }

    return <InputTask currentValue={currentValue} onChangeAction={onChange} onSaveAction={onSave} />
}

export default TaskInput