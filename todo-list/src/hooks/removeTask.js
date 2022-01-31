import { useState, useCallback } from "react"

const useRemoveTask = (id) => {

    const [data, setData] = useState({ status: 0, id: 0})
   
    const removeTask = useCallback(async () => {
        const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'  }
        })
        setData({ status: response.status, id })
    }, [id])

    return [data, removeTask]    
}

export default useRemoveTask