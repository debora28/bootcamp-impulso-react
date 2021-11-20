function calculaIdade (anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá 
    ${this.idade + anos} anos de idade. `
};

const pessoa1 = {
    nome: "Fulana",
    idade: 23,
};
const pessoa2 = {
    nome: "Beltrano",
    idade: 30,
};

console.log(calculaIdade.call(pessoa1, 16));
console.log(calculaIdade.apply(pessoa2, [16]));