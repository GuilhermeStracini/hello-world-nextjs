const fs = require('fs');

const filePath = "tasks.json";

export default function handler(req, res) {

  let rawdata = fs.readFileSync(filePath);
  let tasks = JSON.parse(rawdata);

  switch(req.method){
    case "GET":
      res.status(200).json(tasks);
    break;

    case "POST":
      tasks.push({
        id: Math.floor(Math.random() * 10 * 1024),
        task: req.body.newTask,
        date: new Date()
      });
  
      fs.writeFileSync(filePath, JSON.stringify(tasks));
  
      res.status(200).json(tasks);
    break;

    case "DELETE":
      tasks = tasks.filter( (task) => task.id != req.query.id);
      fs.writeFileSync(filePath, JSON.stringify(tasks));
  
      res.status(200).json(tasks);
    break;
    default: 
      req.status(405);
    break;
  } 
}
