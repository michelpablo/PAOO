//começando...
//const, let, var
// a = 2 ou var = 2 ou a = abc

//const nome = 'Jose'   //const não pode ser reatribuida
//console.log(nome)    //printf do JS

/* let nome = "Ana"    //let pode ser reatribuido, mas não pode ser redeclarado, mais usado
console.log(nome)
nome = "Ana Maria"
console.log(nome) */

/* var nome2 = "Mario"    //var pode ser redeclarado, tem içamento
console.log(nome2)
var nome2 = "Mario Jr"
console.log(nome2) */

/* const n1 = 2
const n2 = '3'
const n3 = n1 + n2
console.log(n3) //coerção implicita
const n4 = n1 + Number(n2)
console.log(n4) //coerção explicita */

/* console.log (1 == 1) //para comparação, === é melhor por não faz coerção
console.log (1 == '1')
console.log (1 === '1') */

/* v1 = []  //vetores
v1[10] = 2
console.log(v1.length)

const nomes = ["Ana", "Antonio", "Rodrigo"]  //filter
const apenasComA = nomes.filter((n) => {return n.startsWith("A")})
console.log(apenasComA)

const iniciais = nomes.map((n) => {return n.charAt(0)})  //map
console.log(iniciais)

const valores = [1, 2, 3, 4]  //reduce
const soma = valores.reduce((ac, v) => {return ac + v})
console.log(soma)

const todosComecamComA = nomes.every((n) => {return n.startsWith("A")}) //every
console.log(todosComecamComA) */
    
/* function hello(){    //ex dupla leitura e redefinição
    console.log('Oi')
}
hello()
function hello (nome){
    console.log('Oi, ' + nome)
}
hello('Ana') */

/* const dobro = function (n){  //funções definidas
    return 2 * n
}
console.log(dobro(2))

const triplo = function (n = 5){
    return 3 * n
}
console.log(triplo(6))
console.log(triplo()) */

//arrow function  ( ) => {}    intuito de escrever menos
/* const hello = () => {console.log('Oi')}
hello()

const dobro = (n) => 2 * n //sem chaves nao precisa do return
console.log(dobro(4))

const ehPar = n => n % 2 === 0 
console.log(ehPar(5)) */

//clousure   funcao interna em conjunto com variaveis externas
/* let umaFuncao = function(){
    console.log("Fui armazenada em uma variavel")
}
umaFuncao()

function f(funcao){
    funcao()
}

function g(){
    function outraFuncao(){
        console.log('Fui criada por g')
    }
    return outraFuncao
}
f(function (){
    console.log("Estou sendo passada para f")
})

const gResult = g()
gResult()
g()() //funcao g e outra funcao
f(g()) */

/* function f(){
    let nome = 'João'
    function g(){
        console.log(nome)
    }
    g()
}
f()

function ola(){
    let nome = "Mario"
    return function(){
        console.log('Ola, ' + nome)
    }
}
let olaResult = ola()
olaResult() */

/* function eAgora(){
    let cont = 1
    function f1(){
        console.log(cont)
    }
    cont++
    function f2(){
        console.log(cont)
    }
    return {f1, f2}
}
let res = eAgora()
res.f1()
res.f2() */

//objetos javascript
//objetos JSON (javascript object notation)
//Uma pessoa e se chama João e tem 17 anos
/* let pessoa = {  //coleção de par chave valor
    nome: "João", //par chave valor
    idade: 17     //outro par chave valor
}
console.log(pessoa.nome)
console.log(pessoa['idade']) */

/* let pessoa = {
    nome: 'Maria',
    idade: 21,
    endereco: {
        rua: 'B', 
        numero: 20
    }
}
console.log('Rua: ' + pessoa.endereco.rua)
console.log('Numero: ' + pessoa['endereco']['numero']) */

/* let concessionaria = {
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
for (let veiculos of concessionaria.veiculos){   //for
    console.log(veiculos.modelo)
} */

/* const calculadora = {
    somar: function (a, b){
        return a + b
    },
    subtrair: (a, b) => a - b 
}
console.log(calculadora.somar(2,3))
console.log(calculadora.subtrair(2,3)) */

