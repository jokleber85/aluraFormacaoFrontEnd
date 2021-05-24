console.log("Loops");

const idadeComprador = 15;
const estaAcompanhado = true;
const destino = "Salvador";
let passagemComprada = false;
let destinoExiste = false;

let cont = 0;

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const podeComprar = idadeComprador >= 18 || estaAcompanhado;

while(cont < listaDestinos.length){
    if (destino == listaDestinos[cont]){
        destinoExiste = true;
        break;
    }
    cont++;
}

if (podeComprar && destinoExiste){
    console.log("Boa Viagem");
} else{
    console.log("Viagem inválida. Verifique as condições de embarque");
}

for(let x=0; x < listaDestinos.length; x++){
    if (destino == listaDestinos[cont]){
        destinoExiste = true;
    }
}

console.log("\n ",destinoExiste);