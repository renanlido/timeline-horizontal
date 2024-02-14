/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

// Caminho para o arquivo JS onde você quer adicionar a importação
const caminhoDoArquivo = path.join(__dirname, './dist/index.js');
const caminhoDoArquivo2 = path.join(__dirname, './dist/index.mjs');

// Texto para adicionar no topo do arquivo
const importacaoCss = "import './index.css';\n";

// Lê o conteúdo atual do arquivo
fs.readFile(caminhoDoArquivo, 'utf8', (erro, dados) => {
  if (erro) {
    console.error('Erro ao ler o arquivo:', erro);
    return;
  }

  // Adiciona a linha de importação no topo do conteúdo do arquivo
  const novoConteudo = importacaoCss + dados;

  // Salva o arquivo com o novo conteúdo
  fs.writeFile(caminhoDoArquivo, novoConteudo, 'utf8', erro => {
    if (erro) {
      console.error('Erro ao escrever no arquivo:', erro);
      return;
    }
    console.log('Importação CSS adicionada com sucesso no topo do arquivo.');
  });
});

if (caminhoDoArquivo2) {
  fs.readFile(caminhoDoArquivo2, 'utf8', (erro, dados) => {
    if (erro) {
      console.error('Erro ao ler o arquivo:', erro);
      return;
    }

    // Adiciona a linha de importação no topo do conteúdo do arquivo
    const novoConteudo = importacaoCss + dados;

    // Salva o arquivo com o novo conteúdo
    fs.writeFile(caminhoDoArquivo2, novoConteudo, 'utf8', erro => {
      if (erro) {
        console.error('Erro ao escrever no arquivo:', erro);
        return;
      }
      console.log('Importação CSS adicionada com sucesso no topo do arquivo.');
    });
  });
}
