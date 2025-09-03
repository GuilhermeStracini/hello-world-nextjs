import Task from "../../components/task";
import styles from "../../styles/Index.module.css";

const Detail = ({ item }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Task item={item} />
      </main>
    </div>
  );
};

22;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`http://localhost:3000/api/todo/${id}`);
  const item = await res.json();

  return { props: { item } };
}

export default Detail;
