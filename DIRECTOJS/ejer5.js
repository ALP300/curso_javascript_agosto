/*
Tablas cruzadas:
Genera la tabla de multiplicar del
1 al 12 para los números del 1 al
10. Imprime cada
tabla en bloques separados.
*/
for(let i=1; i<=10;i++){
    console.log(`La tabla de ${i} es: `)
    for(let j=1 ; j<=12; j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }
    console.log("-----------------------")
}