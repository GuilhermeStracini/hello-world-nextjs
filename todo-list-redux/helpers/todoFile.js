const fs = require('fs')

const filePath = "todo-list-tasks.json"

export const getTodoFileContent = () => {
    try {
        const rawdata = fs.readFileSync(filePath)

        return JSON.parse(rawdata)
    }catch (err) { 

        if (err.code !== 'ENOENT') {
            throw err;
        }
        
        return []
    }
}

export const putTodoFileContent = (content) => fs.writeFileSync(filePath, JSON.stringify(content))

export const resetTodoFileContent = () => fs.writeFileSync(filePath, "[]")