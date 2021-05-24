console.log(`Listas`);

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDestinos.push(`Curitiba`); // adicionando item no array
console.log(`Destinos Possíveis: ${listaDestinos}`);

listaDestinos.splice(1, 1);
console.log(`Destinos Possíveis: ${listaDestinos}`);

console.log(`Destinos Possíveis: ${listaDestinos[0]}`);





