import { SaveButton } from "./buttons"
import { useState } from "react"

const InputTask = ( { currentValue, onChangeAction, onSaveAction }) => {

    const onKeyDown = (event) => {
        if (event.key === "Enter")
            onSaveAction(currentValue)
    }

    const onSave = ()=> onSaveAction(currentValue)

    return (
        <>
            <label>Task: </label>
            <input value={currentValue} onChange={onChangeAction} onKeyDown={onKeyDown}/>
            <SaveButton action={onSave} />
        </>
    )
}

export default InputTask