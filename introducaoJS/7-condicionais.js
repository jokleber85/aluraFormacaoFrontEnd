console.log("Condicionais");

const idadeComprador = 21;
const estaAcompanhado = true;
const passagemComprada = true;

const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

/* if (idadeComprador >= 18 ){
    console.log(`Comprador maior idade -> Destino Possíveis: ${listaDestinos}`);    
}else if(idadeComprador <= 18 && estaAcompanhado == true ){
    console.log(`Comprador Acompanhado -> Destino Possíveis: ${listaDestinos}`);        
}else{
    console.log("Menor idade. Não pode comprar passagem");
} */

if (idadeComprador >= 18 || estaAcompanhado == true){
    console.log(`Destino Possíveis: ${listaDestinos}`);           
}else{
    console.log("Menor idade. Não pode comprar passagem");
}

console.log("\n Embarque:");
if (idadeComprador >=18 && passagemComprada){
    console.log("Boa Viagem");
}else{
    console.log("Viagem não autorizada");
}
    


