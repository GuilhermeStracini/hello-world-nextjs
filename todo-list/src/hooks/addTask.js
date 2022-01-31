import { useState, useCallback } from "react"

const useAddTask = (task) => {

    const [data, setData] = useState({ error: null, tasks: []})
   
    const createTask = useCallback(async () => {

        if(task == "")
        {
            return
        }

        const response = await fetch('http://localhost:3000/api/todo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'  },
            body: JSON.stringify({ newTask: task }) 
        })

        const currentData = await response.json()

        if(response.status == 200)
        {    
            setData({ tasks: currentData })
        }
        else{
            setData({ error: currentData.error })
        }
    }, [task])

    return [data, createTask]    
}

export default useAddTask