/*
Crea una lista con 5 colores 
y una tupla con 3 números. 
Muestra el segundo elemento de cada una
*/
function colores(){
    const colores= ["rojo","azul","amarillo"]
    const numeros=[10,20,30]
    return{
        segundoColor: colores[1],
        segundoNumero: numeros[1]
    }
}
console.log(colores())