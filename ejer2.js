
/*
Suma condicional de múltiplos: Pide un número N y suma
solo los múltiplos de 3 o 5 hasta N. Muestra la suma 
y los múltiplos encontrados.
*/
let N= 10;
let suma=0;
let multiplos= [];
for(let i=1; i<=N; i++){
    if(i%3==0 || i%5==0){
        suma+=i;
        multiplos.push(i);
    }
}
console.log("Múltiplos encontrados= ",multiplos )
console.log("Suma total: ", suma)
