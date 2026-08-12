let concessionaria = {
    nome: 'Classe A',
    cnpj: 333444555, 
    endereco:{
        rua: 'AB',
        numero: 12,
        bairro: 'Tatuape'
    },
    veiculos : [
        {
            marca: 'Fiat',
            modelo: 'Uno',
            ano: 2010   
        },
        {
            marca: 'Ford',
            modelo: 'Ka',
            ano: 2018
        }
    ]
   
}
for (let veiculo of concessonaria.veiculos){
    console.log()
}