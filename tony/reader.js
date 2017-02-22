var fs = require('fs');

console.log("About to read file");

fs.readFile('test.txt', function(err, data) {
  if (err) {
    console.log("Unable to read file about.txt");
  } else {
    console.log("File Contents:");
    console.log(data.toString());
  }
})

console.log("Called fs.readFile()\n");
