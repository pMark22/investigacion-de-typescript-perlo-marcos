
export {};

// enum
// permite definir un conjunto de valores con nombres.
enum Estado {
    PENDIENTE = "PENDIENTE",
    COMPLETADO = "COMPLETADO",
    CANCELADO = "CANCELADO",
}

let estadoTarea: Estado = Estado.PENDIENTE;

console.log("Estado de la tarea:", estadoTarea);


// tipo literal
// permite establecer los valores específicos que puede aceptar una variable.
type Rol = "ADMIN" | "USER" | "GUEST";

let rolUsuario: Rol = "ADMIN";

console.log("Rol del usuario:", rolUsuario);


// cambiar valores
estadoTarea = Estado.COMPLETADO;
rolUsuario = "USER";

console.log("Nuevo estado:", estadoTarea);
console.log("Nuevo rol:", rolUsuario);
