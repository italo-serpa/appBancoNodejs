//Conversão de tipos
console.log("2"+"2")
console.log(parseInt("2")+parseInt("2"))

//Crase
const nome = "Ítalo"
const sobrenome = "Serpa"
console.log(`Meu nome é ${nome} ${sobrenome}`)

//Const não muda, let muda. A imutabilidade do const evita muitos bugs apesar da inflexibilidade, então é preferível.

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 15;

listaDeDestinos.push(`Curitiba`) //Adiciona na lista
listaDeDestinos.splice(2,1) //Deletar apartir do item 2, 1 elemento

console.log(listaDeDestinos);

const fraseOriginal = 'Eu quero comer muito quando chegar em casa'
const fraseModificada = fraseOriginal.replace('muito', 'pouco') 
console.log(fraseModificada) 

//Regex para manipular uma pancada de informações de maneira mais complexa, se liga no exemplo da loucura ->

const cpf = '12345679810'
const cpfFormatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")
console.log(cpfFormatado)

//Como funciona a questão da palavra que você nunca entendeu para que serve:
minhaFunction = (texto) =>{
    console.log(texto);
}

minhaFunction("texto como parâmetro");

//Aprofundar em tagged template literals que usa a `` e a ${}