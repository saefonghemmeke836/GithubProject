let fs = require('fs');
let path = require('path');

fs.readFile(path.resolve(__dirname + '/file.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  
  let lines = data.split('\n');
  for (let i = 0; i < lines.length - 1; i++) {
    if (lines[i] === '' || lines[i + 1] === '') continue;
    
    console.log(lines[i] + ' - ' + lines[i + 1]);
  }
});
