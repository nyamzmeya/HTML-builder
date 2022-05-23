const fs = require("fs");
const fsPromises = fs.promises;
let path = require("path");

async function copyDir() {
  await fsPromises.mkdir(path.join(__dirname, "files-copy"), {
    recursive: true,
  });
  const files = await fsPromises.readdir(path.join(__dirname, "files"));
  const copy_files = await fsPromises.readdir(
    path.join(__dirname, "files-copy")
  );
  for (const file of files) {
    await fsPromises.copyFile(
      path.join(__dirname, "files", file),
      path.join(__dirname, "files-copy", file)
    );
  }
  for (const file of copy_files) {
    if (!files.includes(file)) {
      await fsPromises.unlink(path.join(__dirname, "files-copy", file));
    }
  }
}

copyDir();
