import { useState } from "react"

const useCreateTask = () => {
    const [status, setStatus] = useState('idle')
    const [errorMessage, setErrorMessage] = useState('')
    const [taskAdded, setTaskAdded] = useState(null)

    const createTask = async (newTask) => {
        setTaskAdded(null)
        setStatus('fetching')        

        try {
            const response = await fetch(`http://localhost:3000/api/todo/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'  },
                body: JSON.stringify({ newTask }) 
            });

            var content = await response.json();

            if(response.status == 200){
                setStatus('fetched')
                setTaskAdded(content)
            } else {
                setStatus('error')
                setErrorMessage(`[HTTP ${response.status}] ${content.errorMessage}`)
            }
        }catch(error){
            setStatus('error')
            setErrorMessage(error.message)
        } 
    }

    return [createTask, status, errorMessage, taskAdded]
}

export default useCreateTask