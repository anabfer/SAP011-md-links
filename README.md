# Markdown Links

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Fluxograma](#2-fluxograma)
* [3. Funcionalidades Principais](#3-funcionalidades-principais)
* [4. Guia de Instalação e Uso](#4-guia-de-instalacao-e-uso)
* [5. Testes Unitários](#5-testes-unitarios)
* [6. Tecnologias Utilizadas](#6-tecnologias-utilizadas)
* [7. Autor](#7-autor)
  
***

## 1. Prefácio

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc) e é muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
`README.md`).

O Objetivo deste projeto é desenvolver uma biblioteca que lê arquivos Markdown através de uma CLI (command-line interface) que possiblita a execução da biblioteca no terminal, a partir de um módulo do Node.js, no qual, este irá fazer a leitura dos arquivos em formato `Markdown('.md')`, verificando a existência de links e estatisticas que nele existem.

#


## 2. Fluxograma
<img src='./assets/fluxograma.png' alt="fluxograma" width="700">


## 3. Funcionalidades Principais
* Leitura de arquivos Markdown ('.md') a partir da linha de comando.
* Extração de links contidos nos arquivos Markdown.
* Validação de links contidos nos arquivos Markdown.
* Geração de estatísticas.

## 4. Guia de Instalação e Uso
Instale a biblioteca no terminal através do comando:
```
npm install md-links-anabfer
```
* Para extrair links de um arquivo Markdown, execute:
```
md-links <caminho-do-arquivo>
```
<img src='./assets/md-links.png' alt="md-links" height="500">

* Para validar links de um arquivo Markdown, execute:
```
md-links <caminho-do-arquivo> --validate
```
<img src='./assets/md-links-validate.png' alt="md-links-validate" height="300">

* Para gerar estatísticas de um arquivo Markdown, execute:
```
md-links <caminho-do-arquivo> --stats
```
<img src='./assets/md-links-stats.png' alt="md-links-stats" height="95">

* Para validar links e gerar estatísticas de um arquivo Markdown, execute:
```
md-links <caminho-do-arquivo> --validate --stats
```
<img src='./assets/md-links-validate-stats.png' alt="md-links-validate-stats" height="95">

## 5. Testes Unitários
A aplicação foi finalizada com 100% de cobertura nos testes:

<img src='./assets/testes-unitarios.png' alt="testes-unitarios" height="250">

## 6. Tecnologias Utilizadas
 <img alt="JS" height="50" src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-256.png"> <img alt="git" height="40" src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-256.png"/> <img alt="github" height="45" src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-3/24/github-256.png"/> <img alt="nodejs" height="45" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/nodejs_plain_logo_icon_146409.png"/>

## 7. Autor
Ana Beatriz Ferreira
* github: [@anabfer](https://github.com/anabfer)
* Linkedin: [@anabfer](https://www.linkedin.com/in/anabfer)
