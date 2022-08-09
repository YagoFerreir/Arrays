let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 0;

function somar (item) {
    total += item;
}

numeros.forEach(somar);
console.log(total);

//utilizando forEach para somar todos os valores do array.

const aprovados = ['Yago', 'Luiz', 'Estela', 'Estefane', 'Emma']

aprovados.forEach(function (nome, indice) {
    console.log(` ${indice + 1} ${nome} `)
})

// desta vez uma lista de aprovados onde são colocados em ordem crescente. 

