import styles from '../styles/Controls.module.css'

const TaskCounter = (props) => (<div className={styles.counter}>{props.items} task{props.items == 1 ? "" : "s"}</div>)

export default TaskCounter