import { useState, Fragment, useEffect } from "react"
import Link from "next/link"
import { EditButton, CancelButton, RemoveButton } from "./buttons"
import InputTask from "./input"
import useUpdateTask from "../hooks/useUpdateTask"
import useRemoveTask from "../hooks/useRemoveTask"
import { REMOVE_TASK } from "../store/features/tasks/actions"
import store from "../store/store"

const EditableTask = (props) => {
    const [editing, setEditing] = useState(false)
    const [initialValue, setInitialValue] = useState(props.value)
    const [currentValue, setCurrentValue] = useState(props.value)
    const [updateTask, updateStatus, updateError] = useUpdateTask(props.id)
    const [removeTask, removeStatus, removeError] = useRemoveTask(props.id)

    useEffect(() => {
        if(updateStatus === "idle") {
            return
        }

        switch(updateStatus){
            case "fetched":
                setInitialValue(currentValue)
            break
            
            case "error":
                if(updateError != "") {
                    alert(updateError)
                }
                setEditing(true)
            break
        }
    }, [updateStatus, updateError])

    useEffect(() => {
        if(removeStatus === "idle") {
            return
        }

        switch(removeStatus){
            case "fetched":
                store.dispatch({ type: REMOVE_TASK, payload: props.id})
            break
            
            case "error":
                if(removeError != "") {
                    alert(removeError)
                }
            break
        }

    }, [removeStatus, removeError])

    const onChange = (e) => setCurrentValue(e.target.value)
    
    const onSave = () => {
        setEditing(false)

        if(currentValue !== initialValue){
            updateTask(currentValue)
        }
    }

    const onCancel = () => {
        setEditing(false)
        setCurrentValue(initialValue)
    }

    const onRemove = () => {
        const confirmation = confirm(`Do you want to remove the task ${props.id} ?`)

        if(confirmation){
            removeTask()
        }
    }

    function getEditor() {
        return (
            <Fragment>
                <InputTask currentValue={currentValue} onChangeAction={onChange} onSaveAction={onSave} />
                <CancelButton action={onCancel} />
            </Fragment>    
        )
    }

    function getText() {
        return (
            <Fragment>
                <Link href={`/details/${props.id}`}>
                    {currentValue}
                </Link> 
                <EditButton action={()=>setEditing(true)}/>
                <RemoveButton action={onRemove} />
            </Fragment>
        )
    }

    return editing ? getEditor() : getText()
}

export default EditableTask