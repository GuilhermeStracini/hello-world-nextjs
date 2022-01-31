import '../styles/globals.css'
import { TasksProvider } from "../contexts/tasks"

function ToDoApp({ Component, pageProps }) {
  return (
  <TasksProvider>
    <Component {...pageProps} />
  </TasksProvider>
  )
}

export default ToDoApp
