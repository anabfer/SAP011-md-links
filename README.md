# Markdown Links

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Fluxograma](#2-fluxograma)
* [3. Funcionalidades Principais](#3-funcionalidades-principais)
* [4. Guia de Instalação e Uso](#4-guia-de-instalacao-e-uso)
* [5. Critérios de aceitação mínimos do projeto](#5-criterios-de-aceitação-mínimos-do-projeto)
* [6. Testes Unitários](#6-testes-unitarios)
* [7. Tecnologias Utilizadas](#6-tecnologias-utilizadas)
* [8. Autor](#7-autor)

***

## 1. Prefácio

[Markdown Links](https://pt.wikipedia.org/wiki/Markdown) é uma biblioteca desenvolvida para a leitura de arquivos Markdown por meio de uma CLI (Interface de Linha de Comando), permitindo a execução da biblioteca diretamente no terminal. Utilizando um módulo do Node.js, o projeto possibilita a leitura de arquivos no formato Markdown ('.md'), com recursos para verificação de links e geração de estatísticas a partir do conteúdo.


## 2. Fluxograma
<img src='./assets/fluxograma.png' alt="fluxograma">


## 3. Funcionalidades Principai
* Leitura de arquivos Markdown ('.md') a partir da linha de comando.
* Extração de links contidos nos arquivos Markdown.
* Validação de links contidos nos arquivos Markdown.
* Geração de estatísticas  

## 4. Guia de Instalação e Uso
Instale a biblioteca no terminal através do comando:
```
npm install md-links-anabfer
```
Para extrair links de um arquivo Markdown, execute:
```
md-links <caminho-do-arquivo>
```
<img src='./assets/md-links.png' alt="md-links">

Para validar links de um arquivo Markdown, execute:
```
md-links <caminho-do-arquivo> --validate
```
<img src='./assets/md-links-validate.png' alt="md-links-validate">

Para gerar estatísticas de um arquivo Markdown, execute:
```
md-links <caminho-do-arquivo> --stats
```
<img src='./assets/md-links-stats.png' alt="md-links-stats">

Para validar links e gerar estatísticas de um arquivo Markdown, execute:
```
md-links <caminho-do-arquivo> --validate --stats
```
<img src='./assets/md-links-validate-stats.png' alt="md-links-validate-stats">

## 5. Critérios de aceitação mínimos do projeto
CRITERIOS AQUI

## 6. Testes Unitários
<img src='./assets/testes-unitarios.png' alt="testes-unitarios">

## 7. Tecnologias Utilizadas
 <img alt="JS" height="50" src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-256.png"> <img alt="git" height="40" src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-256.png"/> <img alt="github" height="45" src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-3/24/github-256.png"/> <img alt="nodejs" height="45" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/nodejs_plain_logo_icon_146409.png"/>

## 8. Autor
Ana Beatriz Ferreira
* github: [@anabfer](https://github.com/anabfer)
* Linkedin: [@anabfer](https://www.linkedin.com/in/anabfer)