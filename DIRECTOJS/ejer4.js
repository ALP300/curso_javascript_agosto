/*
4. Clasificación de productos:
Pide nombre, precio y categoría (tecnología,
 alimentos, ropa). Dependiendo de la
categoría y precio, aplica diferentes tipos
 de impuestos y clasificaciones (lujo, básico,
etc.).
*/
let nombre= "Laptop"
let precio= 23.43435435454546
let categoria="tecnología"

if(isNaN(precio) || precio<0){
    console.log("Precio no válido")
}else{
    let impuesto=0
    let clasificaciones=""

    switch(categoria){
        case "tecnología":
            impuesto= precio*0.18
            clasificaciones= precio>1000 ? "Lujo" : "Básico"
            break;

        case "alimentos":
            impuesto= precio*0.05
            clasificaciones= precio>50 ? "Lujo" : "Básico"
            break;
        
        case "ropa":
            impuesto= precio*0.12
            clasificaciones= precio>50 ? "Lujo" : "Básico"
            break;
        
        default:
            console.log("Categoría no válida")
            return 
    }
    let precioTotal= precio+impuesto
    console.log(`Producto: ${nombre}`)
    console.log(`Precio del Producto: ${precio.toFixed(2)}`)
    console.log(`Impuesto: ${impuesto.toFixed(2)}`)
    console.log(`Precio total es: ${precioTotal.toFixed(2)}`)
    console.log(`Categoría: ${categoria}`)
}
