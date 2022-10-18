const fs = require("fs");
const path = require("path");
fs.rename("welcome.txt", "hello.txt", (err) => {
  if (err) throw err;

  console.log(" file renamed");
  fs.readFile(path.join(__dirname, "hello.txt"), "UTF8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
