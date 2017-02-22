var fs = require('fs');

fs.readFile('test.txt', function (err, data) {
  if (err) {
    console.log("Unable to read test.txt");
  } else {
    console.log(data.toString());
  }
});
