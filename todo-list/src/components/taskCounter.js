import styles from "../styles/Controls.module.css";

const TaskCounter = (props) => {
  if (props.items == null) {
    return "";
  }

  return (
    <div className={styles.counter}>
      {props.items} task{props.items == 1 ? "" : "s"}
    </div>
  );
};

export default TaskCounter;
