import { useState } from "react";
import TaskInput from "./taskInput";
import Tasks from "./tasks";
import Controls from "./controls";

const ToDoList = (props) => {
  const [items, setItems] = useState(props.items);

  return (
    <div>
      <Controls items={items?.length} setItems={setItems} />
      <TaskInput setItems={setItems} />
      <Tasks items={items} setItems={setItems} />
    </div>
  );
};

export default ToDoList;
