let fs = require('fs');
let path = require('path');

let read = fs.createReadStream(path.join(__dirname, "text.txt"));

read.on("data", function (chunk) {
    console.log(chunk.toString());
});

