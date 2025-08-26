/*
5. Suma condicional de múltiplos:
Pide un número N y suma solo los
múltiplos de 3 o 5 hasta N. 
Muestra la suma y los
múltiplos encontrados.
*/
let multiplos=[]
let N=20
let suma=0


for (let i=1; i<=N; i++){
    if(i%3==0 || i%5==0){
        suma+=i
        multiplos.push(i)
    }
}
console.log(`Múltiplos de 3 y 5 son: ${multiplos}`)
console.log(`La suma total es: ${suma}`)