import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/gerente.js";
import {Diretor} from "./Funcionarios/diretor.js";
import {SistemaDeAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor ("Camila", 7500, 77755577755)
const gerente = new Gerente ("Maria", 4000, 44400044400)
const cliente = new Cliente ("Lais", 88899988899, "4554")

diretor.cadastrarSenha("99133") 
gerente.cadastrarSenha("33199")

const diretorEstaLogado = SistemaDeAutenticacao.login(diretor, "99133");
const gerenteEstaLogado = SistemaDeAutenticacao.login(gerente, "33199");
const clienteEstaLogado = SistemaDeAutenticacao.login(cliente, "4554");

console.log(diretorEstaLogado)
console.log(gerenteEstaLogado)
console.log(clienteEstaLogado)

//F12 navega até o item.