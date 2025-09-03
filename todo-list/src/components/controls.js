import TaskCounter from "./taskCounter";
import ClearAll from "./clearAll";
import styles from "../styles/Controls.module.css";

const Controls = (props) => {
  return (
    <div className={styles.controls}>
      <TaskCounter items={props.items} />
      <ClearAll items={props.items} setItems={props.setItems} />
    </div>
  );
};

export default Controls;
