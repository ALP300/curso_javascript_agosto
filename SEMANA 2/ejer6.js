/*
Crea un array de objetos con productos
(nombre, categoría, precio). Solicita 
una categoría y muestra todos los productos 
de esa categoría ordenados por precio.

let numeros = [1, 2, 3];
// Aplicar una función a cada elemento del arreglo
let duplicados = numeros.map(numero => numero * 2);
console.log(duplicados);
*/
function productos(){
    let productos=[
        {nombre: "Laptop",categoria: "Tecnologia", precio: 8500},
        {nombre: "Silla",categoria: "Muebles", precio: 300},
        {nombre: "Laptop2",categoria: "Tecnologia", precio: 4500},
        {nombre: "Laptop3",categoria: "Tecnologia", precio: 6500}
    ]
    let categoria="Tecnologia"
    let filtrados= productos.filter(p => p.categoria === "Tecnologia").sort((a,b)=> a.precio - b.precio)
    return filtrados
}

console.log(productos())
