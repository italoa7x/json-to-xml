var convert = require("xml-js");
var fs = require("fs");
const path = require("path");

const json = require("./nota.json");

var options = {
  compact: true,
  ignoreComment: true,
  spaces: 4,
};
var result = convert.json2xml(json, options);

fs.writeFile("tmp/arquivo.xml", result, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("criou");
});
