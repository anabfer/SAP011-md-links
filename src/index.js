const fs = require('fs');

function mdLinks(path, options) {
  // ler o conteúdo
    return fs.promises.readFile(path, 'utf8').then ((fileContent) => {
      // Regex para identificar links
      const pattern = /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g;
      // Cria um array com MatchAll para pegar todas as correspodências de links no arquivo
      const matches = [...fileContent.matchAll(pattern)];
      // Cria um objeto para especificar as informações que vai mostrar
      const objLinks = matches.map((link) => ({
        text: link[1],
        url: link[2],
        file: path,
      })
      )
      if (options.validate){
        const validations = objLinks.map((link) =>
          validateLink(link)
        );
        return Promise.all(validations);
      }
      return objLinks;
    })
  };

function validateLink(link) {
  return fetch(link.url)
  .then(response => {
    if (response.ok) {
      link.valid = true;
      link.status = response.status;
    } else {
      link.valid = false;
      link.status = response.status;
    }
    return link;
  })
  .catch(error => {
    link.valid = false;
    link.error = error.message;
    return link;
  });
}



module.exports = { mdLinks, validateLink };
















