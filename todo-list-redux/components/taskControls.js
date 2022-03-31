import { Fragment } from "react"
import TaskCounter from './taskCounter';
import ClearAll from './clearAll';
import styles from '../styles/TaskControls.module.css'

const TaskControls = () => {
    return (
        <Fragment>
            <TaskCounter items={Tasks.items} />
            {Tasks.length > 0 ? <ClearAll /> : ""}
        </Fragment>)
}

export default TaskControls