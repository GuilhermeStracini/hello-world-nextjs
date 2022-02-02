import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Details.module.css'
import Task from "../../components/task"

export default function Details() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ToDo list with Redux</title>
        <meta name="description" content="ToDo list with Redux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Todo App with Redux</h1>
        <h2>Task details</h2>

        <Task />
      </main>

      <footer className={styles.footer}>
        <Link href="/">
          <button>Back to Task Management</button>
        </Link>
      </footer>
    </div>
  )
}
