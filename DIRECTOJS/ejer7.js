/*
10. Filtrado y estadística de temperaturas:
Dado un array de temperaturas de un mes, 
filtra los días con temperaturas mayores al
promedio y muestra estadísticas como el 
mínimo, máximo y promedio general.
*/
let temperaturas=[12,34,21,32,43,54,23,9]
let promedio= temperaturas.reduce((suma, temperatura)=>suma+temperatura,0 )/temperaturas.length
console.log(`El promedio es: ${promedio}`)