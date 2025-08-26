/*
2. Validación de acceso:
Solicita usuario, contraseña y rol 
(admin, editor, visitante). 
Verifica si las credenciales
son válidas y muestra los permisos 
disponibles según el rol. 
Usa múltiples condicionales
y lógica anidada.
*/
let usuario="usuario" 
let contraseña= "123456"
let rol= "editor"

if (usuario && contraseña){
    if(rol==="admin"){
        console.log("Acceso concedido, PERMISOS:Crear,Editar,Eliminar")
    }else if(rol==="editor"){
        console.log("Acceso concedido, PERMISOS:Editar")
    }else if(rol==="visitante") {
        console.log("Acceso concedido, PERMISOS:Visitante")
    } else{
         console.log("No existe el rol")
    }
}else{
    console.log("Credenciales inválidas")
}
