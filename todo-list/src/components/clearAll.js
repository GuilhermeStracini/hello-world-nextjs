import styles from "../styles/Controls.module.css";

const ClearAll = (props) => {
  const handleClear = async () => {
    const resp = await fetch("http://localhost:3000/api/todo/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (resp.status == 200) {
      props.setItems([]);
      return;
    }

    alert(`[HTTP ${resp.status}]`);
  };

  if (props.items == 0) {
    return "";
  }

  return (
    <div className={styles.clearAll}>
      <button onClick={handleClear}>Clear all</button>
    </div>
  );
};

export default ClearAll;
