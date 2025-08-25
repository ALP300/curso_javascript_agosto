class Persona{
    constructor(nombre, edad, estatura=1.6){
       this.nombre= nombre;
       this.edad= edad;
       this.estatura= estatura
    }
    presentar(){
        return `Hola soy ${this.nombre} y tengo ${this.edad} años y tengo ${this.estatura}`
    }

}

const persona1= new Persona( "Leo", 21, 1.7)
const persona2= new Persona( "Pepe", 27 )

console.log(persona1.presentar());
console.log(persona2.presentar());
