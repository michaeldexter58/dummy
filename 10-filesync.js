const {readFileSync, writeFileSync} = require ('fs');
console.log('Start');
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/seconf.txt','utf-8');

writeFileSync('./content/result-sync.txt',`here is the result : ${first},${second}`,

{flag:'a'}
)
console.log('Done with this task');
console.log('startring th next one ')

