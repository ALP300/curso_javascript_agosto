/*6. Tablas cruzadas: Genera la tabla de multiplicar del 1 al 12 para
 los números del 1 al 10. Imprime cada tabla en bloques separados. */

 for(let n=1; n<= 10; n++){
    console.log(n)
    for(let i=1; i<=12; i++){
        console.log(`${n} x ${i} = ${n*i}`)
    }
 }