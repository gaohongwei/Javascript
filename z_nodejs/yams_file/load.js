// npm install js-yaml

var yaml = require("js-yaml");
var fs = require("fs");
var e = yaml.load(fs.readFileSync("config/data.yml"));
console.log(e.greeting);
console.log(e.year);

/*
greeting: hello!
year: 2012
server:
  port: 1234
  host: 127.0.0.1
*/
