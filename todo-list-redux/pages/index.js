import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Todo from "../components/todo"
import store from "../store/store"
import { ADD_TASKS } from '../store/features/tasks/actions'

export default function Index({ items }) {

  store.dispatch({ type: ADD_TASKS, payload: items })
   
  return (
    <div className={styles.container}>
      <Head>
        <title>ToDo list with Redux</title>
        <meta name="description" content="ToDo list with Redux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Todo App with Redux</h1>
        <h2>Task management</h2>

        <Todo />
      </main>      
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/todo')
  const items = await res.json()
  
  return { props: { items } }
}
