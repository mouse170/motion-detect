var Motion = require('motion').Motion;
var fs = require('fs');
var motion = new Motion();
var hasMotion;

fs.readFile('original.jpg', function(err, data) {
  if (err) throw err;
  console.log(data);
hasMotion = motion.detect(data);
console.log(hasMotion);
hasMotion = motion.detect(data);
console.log(hasMotion);
});
