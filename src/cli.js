#!/usr/bin/env	node
const mdLinks = require('./index.js');

const inputs = process.argv;
const path = inputs[2];

mdLinks(path);

