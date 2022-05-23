let fs = require("fs");
let path = require("path");

let writer = fs.createWriteStream(path.join(__dirname, "text.txt"));

process.stdin.on("data", (data) => {
  if (data.toString().trim() == "exit") {
    console.log("Пока!");
    process.exit();
  }

  writer.write(data);
});

console.log("Привет, жду твой текст...");
