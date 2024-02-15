/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

// Caminho para o arquivo JS onde você quer adicionar a importação
const filePath = path.join(__dirname, './dist/index.js');

// Texto para adicionar no topo do arquivo
const importCSS = "import './index.css';\n";

// Lê o conteúdo atual do arquivo
fs.readFile(filePath, 'utf8', (erro, dados) => {
  if (erro) {
    console.error('Erro ao ler o arquivo:', erro);
    return;
  }

  // Adiciona a linha de importação no topo do conteúdo do arquivo
  const newContent = importCSS + dados;

  // Salva o arquivo com o novo conteúdo
  fs.writeFile(filePath, newContent, 'utf8', erro => {
    if (erro) {
      console.error('Error writing to the file:', erro);
      return;
    }
    console.log('CSS import successfully on the top of the file.');
  });
});
