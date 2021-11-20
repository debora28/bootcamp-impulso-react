const array = [7, 7, 4, 6, 2, 6, 2];

function valoresUnicos(arr) {
    const mySet =  new Set(arr)

    return [ ... mySet]
}

console.log(valoresUnicos(array))