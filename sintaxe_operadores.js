function comparar(a, b) {
    if (a === b) {
        console.log(`Os números ${a} e ${b} são iguais.`)
    } else {
        console.log(`Os números ${a} e ${b} não são iguais.`)
    }

    let comparar10 = '';
    if (a + b > 10) {
        comparar10 = 'maior';
    } else {
        comparar10 = 'menor';
    }

    let comparar20 = '';
    if (a + b > 20) {
        comparar20 = 'maior';
    } else {
        comparar20 = 'menor';
    }

    console.log(`Sua soma é ${a + b}, que é ${comparar10} que 10 e ${comparar20} que 20.`);
}

comparar(5, 7);
comparar(2, 20);
comparar(9, -1);
