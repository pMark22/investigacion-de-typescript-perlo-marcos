
export {};

// interface para objetos
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    edad?: number; // propiedad opcional
    readonly createdAt: Date; // solo lectura
}

const user: Usuario = {
    id: 1,
    nombre: "Maria",
    email: "maria@gmail.com",
    createdAt: new Date(),
};

console.log("Usuario:", user);

// interface con métodos
interface Producto {
    nombre: string;
    precio: number;
    calcularDescuento(porcentaje: number): number;
}

const producto: Producto = {
    nombre: "Teclado",
    precio: 32000,
    calcularDescuento(porcentaje: number): number {
        return this.precio - (this.precio * porcentaje / 100);
    },
};

console.log("Producto:", producto.nombre);
console.log("Precio con descuento:", producto.calcularDescuento(10));

// extender interfaces
interface Empleado extends Usuario {
    legajo: string;
    salario: number;
}

const empleado: Empleado = {
    id: 2,
    nombre: "Marcos",
    email: "marcos@gmail.com",
    createdAt: new Date(),
    legajo: "EMP001",
    salario: 500000,
};

console.log("Empleado:", empleado);

// type alias
type ID = string | number;
type Rol = "ADMIN" | "USER" | "GUEST";

let identificador: ID = "ABC123";
let rol: Rol = "ADMIN";

console.log("Identificador:", identificador);
console.log("Rol:", rol);

// type para objetos
type Coordenada = {
    x: number;
    y: number;
};

const ubicacion: Coordenada = {
    x: 10,
    y: 20,
};

console.log("Coordenadas:", ubicacion);


// intersection types
type EmpleadoCompleto = Empleado & {
    departamento: string;
};

const empleadoCompleto: EmpleadoCompleto = {
    id: 3,
    nombre: "Ana",
    email: "ana@example.com",
    createdAt: new Date(),
    legajo: "EMP002",
    salario: 600000,
    departamento: "Administración",
};

console.log("Empleado completo:", empleadoCompleto);
