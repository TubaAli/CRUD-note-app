const fs = require('fs');
const yargs = require('yargs');
// const book = {
//     title: 'The Alchemist',
//     author: 'PA'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('tuba.txt',bookJSON);

// const dataBuffer = fs.readFileSync('tuba.txt');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync('tuba.txt');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

console.log(data.name);
console.log(data.age);

data.name = yargs.argv.name;
data.age = yargs.argv.age;

const userJSON = JSON.stringify(data);
fs.writeFileSync('tuba.txt', userJSON);
