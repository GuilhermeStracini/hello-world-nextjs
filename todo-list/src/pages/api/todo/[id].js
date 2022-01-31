const fs = require('fs');

const filePath = "tasks.json";

export default function handler(req, res) {
    const rawdata = fs.readFileSync(filePath);
    const tasks = JSON.parse(rawdata);

    const filtered = tasks.filter((t) => t.id == req.query.id)

    if(filtered.length === 0)
    {
        res.status(404).json({ error: `Task ${id} not found` })
    }

    switch(req.method){
        case "GET":
            res.status(200).json(filtered[0])
        break

        case "DELETE":
            tasks = tasks.filter( (task) => task.id != req.query.id);
            fs.writeFileSync(filePath, JSON.stringify(tasks));
  
            res.status(200).json(tasks);
        break

        default:
            res.status(405)
        break
    }   
}