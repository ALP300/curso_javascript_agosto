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

class Trabajador extends Persona{
    constructor(nombre, edad, cargo){
        super(nombre, edad);
        this.cargo= cargo
    }
    mostrartrabajador(){
        return `Hola soy ${this.nombre} y tengo ${this.edad} años y tengo el cargo de ${this.cargo}`
    }
}
const trabajador1= new Trabajador("Leo",48,"Desarrollador de software")
const trabajador2= new Trabajador("Daniel",22,"Futbolista del Barca")
console.log(trabajador1.mostrartrabajador())
console.log(trabajador2.mostrartrabajador())