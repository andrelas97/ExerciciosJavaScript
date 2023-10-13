01)
let dia = true; //em caso de "false" a mensagem é: De noite
if (dia) {
  console.log("Claro");
} else {
  console.log("De noite");
} */

02)
for (let n = 2; n <= 20; n += 2) {
  console.log(n);
} */

03)
function mostrarFrase() {
  console.log("Sou aluna do Vai na Web!");
}
mostrarFrase(); */

04)
function mostrarNome(nome) {
  console.log("Meu nome é " + nome);
}
mostrarNome("Aline");
*/

05
function minhasInformacoes(nome, idade, estiloMusical) {
  console.log("nome: " + nome);
  console.log("idade: " + idade);
  console.log("estilo preferido: " + estiloMusical);
}
minhasInformacoes("Aline", "21", "pop");
*/

06)
function meusGostos(filme, musica) {
  console.log("filme: " + filme);
  console.log("musica: " + musica);
}
meusGostos("Scream", "After Hours-The Weekend");*/

07)
function numeroTriplo(n) {
  return n * 3;
}
let resultado = numeroTriplo(9);
console.log("o resultado do triplo de 9 é " + resultado);*/

09)
let itens = ["maquiagem", "roupa", "sapato", "perfume", "shampoo"];
console.log(itens);*/

10)
let paises = ["Brasil", "Canada", "Eua", "Irlanda"];
paises.unshift("Dinamarca");
console.log(paises);*/

11)
let bebidas = ["coca-cola", "suco", "agua", "vinho"];
bebidas.pop();
console.log(bebidas);*/

12)
let comidas = ["strogonoff", "lasanha", "macarrão", "churrasco"];
comidas.push("hamburguer");
comidas.push("cuzcuz");
console.log(comidas);
13)
comidas.shift();
console.log(comidas);*/

14)
let numbers = [3, 7, 9, 4, 8, 1, 5, 6, 2];
numbers.sort();
console.log(numbers);*/

15)
let propriedades = {
  nome: "andre",
  idade: 26,
  origem: "Brasil"
};

16)
propriedades.Profissao = "estudante";
console.log(propriedades)

17)
delete propriedades.idade;
console.log(propriedades)*/

19)
let cadastro = [
  {
    nome: "Jorginho",
    idade: 20,
    telefone: 123,
    amigos: ["andre", "carlos", "aline", "thamyres"]
  },
  {
    nome: "Jussara",
    idade: 20,
    telefone: 123,
    amigos: ["andre", "carlos", "aline", "thamyres"]
  },
  {
    nome: "Oswaldo",
    idade: 20,
    telefone: 123,
    amigos: ["andre", "carlos", "aline", "thamyres"]
  },
  {
    nome: "Adamastor",
    idade: 20,
    telefone: 123,
    amigos: ["andre", "naiara", "aline", "thamyres"]
  },
  {
    nome: "merry",
    idade: 20,
    telefone: 123,
    amigos: ["andre", "carlos", "aline", "alberto"]
  }
];*/
20 - Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[1]);
console.log(cadastro[2].amigos[2]);
console.log(cadastro[3].amigos[3]);
console.log(cadastro[4].amigos[3]);*/
