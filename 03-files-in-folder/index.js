let fs = require("fs/promises");
let path = require("path");


(async function () {
  const files = await fs.readdir(path.join(__dirname, "secret-folder"),{ withFileTypes: true });
  for (const file of files) {
      if (!file.isDirectory()) {
          let info = await fs.stat(path.join(__dirname, "secret-folder", file.name));
          let ext = path.extname(file.name);
          console.log(file.name.split('.')[0] + " " + ext.substring(1) + " " + info.size);
      }
  };
})();
