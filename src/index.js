const fs = require('fs');
const chalk = require('chalk'); 

const mdLinks = (path) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const captures = [...data.matchAll(regex)];
    const results = captures.map((capture) => ({
      text: capture[1],
      url: capture[2],
      file: path
    }));
    console.log(results); 
  });
}
// mdLinks('README.md');

module.exports = mdLinks;

console.log(chalk.blue('Hello world!'));

//FUNÇÃO BASICA PARA TESTAR O PACKAGE.JASON 
function soma(a, b) {
  return a + b;
}
console.log(soma(1, 2));


