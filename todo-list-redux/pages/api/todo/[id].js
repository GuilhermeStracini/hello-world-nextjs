import { getTodoFileContent, putTodoFileContent, resetTodoFileContent } from "../../../helpers/todoFile"

export default function handler(req, res) {
    const rawId = req.query.id

    if(!new RegExp(/^\d+$/).test(rawId)){
        return res.status(400).json({ errorMessage: `'${rawId}' is invalid for task id`})
    }

    const id = parseInt(rawId)

    if(isNaN(id) || id <= 0) {
        return res.status(400).json({ errorMessage: `'${rawId}' is invalid for task id`})
    }

    let tasks = getTodoFileContent();

    const tasksFiltered = tasks.filter((t) => t.id === id)

    if(tasksFiltered.length === 0) {
        return res.status(404).json({ errorMessage: `Task ${id} not found` })
    }

    const currentTask = tasksFiltered[0]

    switch(req.method) {
        case "GET":
            return res.status(200).json(currentTask)

        case "PUT":
            currentTask.updatedDate = new Date()
            currentTask.task = req.body.newTask

            putTodoFileContent(tasks)

            return res.status(200).json("{}")
            
        case "PATCH":
            currentTask.updatedDate = new Date()
            currentTask.done = req.body.done

            putTodoFileContent(tasks)

            return res.status(200).json("{}")

        case "DELETE":
            tasks = tasks.filter( (task) => task.id !== id)
            
            putTodoFileContent(tasks)
  
            return res.status(200).json("{}")

        default:
            return res.status(405)
    }   
}