const alunos = [
    {
        nome: "Jose",
        nota: 6
    },
    {
        nome: "Jorge",
        nota: 8
    },
    {
        nome: "Matias",
        nota: 9
    }
]

function alunosAprovados(array, media) {

    let aprovados = [];

    for (let a = 0; a < array.length; a++) {
        const {nome, nota} = array[a];
        if (nota > media) {
            aprovados.push(nome);
        }
    }

    return aprovados
}

console.log(alunosAprovados(alunos, 5));