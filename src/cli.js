#!/usr/bin/env	node

const { mdLinks } = require('./index.js');
const chalk = require('chalk');

const path = process.argv[2];
const options = {
    validate: process.argv.includes('--validate'),
    stats: process.argv.includes('--stats'),
  };

  console.log(chalk.blue('Hello world!'));

mdLinks(path, options).then((links) => {
    console.log(links)
});



