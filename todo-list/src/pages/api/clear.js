const fs = require('fs');

const filePath = "tasks.json";

export default function handler(req, res) {

  switch(req.method){
    case "POST":
      fs.writeFileSync(filePath, "[]");
  
      res.status(200).json("[]");
    break;

    default: 
      req.status(405);
    break;
  } 
}
