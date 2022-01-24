//npm - global command comes with node
//npm --version

//local dependecny -use it only in this particular project
//npm i <packagename>

//global dependency - use it in any project
//npm install -g <packagename>
//sudo npm install -g <packagename>(mac)

//package.json -manifest file 
//manuel approach
//npm init (step by step)
//npm init -y (default)

const _ = require('lodash');

const items =[1,[2,[3,[4]]]]
const newitems = _.flattenDeep(items)
console.log(newitems)