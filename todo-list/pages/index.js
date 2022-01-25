import Head from 'next/head'
import ToDoList from './ToDoList'
import styles from '../styles/Index.module.css'

export default function Index({ items }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>ToDo app</title>
        <meta name="description" content="ToDo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ToDo app
        </h1>
        
        <ToDoList items={items} />
        
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/todo')
  const items = await res.json()
 
  return { props: { items } }
}

