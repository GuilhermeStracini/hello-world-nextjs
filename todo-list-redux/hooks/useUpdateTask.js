import { useState } from "react"

const useUpdateTask = (taskId) => {
    const [status, setStatus] = useState('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const updateTask = async (newTask) => {
        setStatus('fetching')

        try {
            const response = await fetch(`http://localhost:3000/api/todo/${taskId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'  },
                body: JSON.stringify({ newTask }) 
            });

            var content = await response.json();

            if(response.status == 200){
                setStatus('fetched')
            } else {
                setStatus('error')
                setErrorMessage(`[HTTP ${response.status}] ${content.errorMessage}`)
            }
        }catch(error){
            setStatus('error')
            setErrorMessage(error.message)
        } 
    }

    return [updateTask, status, errorMessage]
}

export default useUpdateTask