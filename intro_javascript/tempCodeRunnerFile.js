const fs = require('fs') //file system
const abrirArquivo = function (nomeArquivo){
    //definir uma funcao callback
    const exibirConteudo = function(erro, conteudo){
        if(erro){
            console.log(`Deu erro: ${erro}`)
        }
        else{
            console.log(conteudo.toString())
        }
    }
    //chamar a funcao de leitura do arquivo, entregando a callback como parametro
    fs.readFile(nomeArquivo, exibirConteudo)
}
abrirArquivo("arquivo.txt")