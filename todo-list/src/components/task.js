import Link from "next/link";

const Task = ({ item }) => {
  return (
    <div>
      <div>
        <span>Id:</span> {item.id} <br />
        <span>Date: </span> {item.date} <br />
        <span>Task:</span> {item.task}
      </div>
      <div>
        <Link href="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Task;
