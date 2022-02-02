import { useState } from "react"

const useRemoveAllTasks = () => {
    const [status, setStatus] = useState('idle')
    const [errorMessage, setErrorMessage] = useState('')

    const removeAllTasks = async () => {
        setStatus('fetching')

        try {
            const response = await fetch(`http://localhost:3000/api/todo/`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json'  }
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

    return [removeAllTasks, status, errorMessage]
}

export default useRemovesTasks