import { Fragment } from "react"
import TaskInput from "./taskInput"
import TaskControls from "./taskControls"
import TaskList from "./taskList"

const ToDo = () => {
    return (
    <Fragment>
        <TaskInput />
        <TaskControls />
        <TaskList />
    </Fragment>)
}

export default ToDo