const fs = require("fs");

const filePath = "tasks.json";

function getNewId(existingIds) {
  while (true) {
    const newId = Math.floor(Math.random() * 10240);

    if (!existingIds.includes(newId)) {
      return newId;
    }
  }
}

export default function handler(req, res) {
  let rawdata = fs.readFileSync(filePath);
  let tasks = JSON.parse(rawdata);

  switch (req.method) {
    case "GET":
      res.status(200).json(tasks);
      break;

    case "POST":
      const newTask = req.body.newTask;

      if (
        newTask == null ||
        newTask.length == 0 ||
        newTask.replace(/\s/g, "") == ""
      ) {
        return res.status(400).json({ error: "new task cannot be empty" });
      }

      const id = getNewId(tasks.map((task) => task.id));

      tasks.unshift({
        id,
        task: req.body.newTask,
        date: new Date(),
      });

      fs.writeFileSync(filePath, JSON.stringify(tasks));

      res.status(200).json(tasks);
      break;

    case "DELETE":
      fs.writeFileSync(filePath, "[]");
      res.status(200).json("[]");
      break;

    default:
      res.status(405);
      break;
  }
}
