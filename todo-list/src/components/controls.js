import TaskCounter from './taskCounter';
import ClearAll from './clearAll';
import styles from '../styles/Controls.module.css'

const Controls = () => {
    return (
        <div className={styles.controls}>
            <TaskCounter />
            <ClearAll />
        </div>
    )
}

export default Controls