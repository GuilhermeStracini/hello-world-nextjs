import { getTodoFileContent, putTodoFileContent, resetTodoFileContent} from "../../../helpers/todoFile"
import { generateNewNumericId } from "../../../helpers/domain"

export default function handler(req, res) {

  let tasks = getTodoFileContent()

  switch(req.method){
    case "GET":
      res.status(200).json(tasks);
    break;

    case "POST":
      const newTask = req.body.newTask;  

      if(newTask == null || newTask.length == 0 || newTask.replace(/\s/g,"") == "")
      {
          return res.status(400).json({ errorMessage: "new task cannot be empty" });
      }

      const taskId = generateNewNumericId(tasks.map((task) => task.id));

      const task = {
        id: taskId,
        task: newTask,
        createdDate: new Date(),
        updatedDate: new Date(),
        done: false
      };

      tasks.unshift(task);
  
      putTodoFileContent(tasks)
  
      res.status(200).json(task);
    break;

    case "DELETE":
      resetTodoFileContent()
      res.status(200).json("{}");
    break;
    
    default: 
      res.status(405).json("{}");
    break;
  } 
}
