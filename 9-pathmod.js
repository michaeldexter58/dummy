const { getCipherInfo } = require('crypto');
const path = require('path');

console.log(path.sep);

const filepath = path.join('/content/subfolder','text.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolur =  path.resolve(__dirname,'conetent/subfolder','text.txt')
console.log(absolur)