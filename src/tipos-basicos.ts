export {};

//string, number y boolean
let nombre: string = "Marcos";
let edad: number = 20;
let activo: boolean = false;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Activo:", activo);

//array
let numeros: number[] = [1, 2, 3];
let nombres: string[] = ["Ana", "Luis", "Marcos"];

console.log("Números:", numeros);
console.log("Nombres:", nombres);

//union type
let id: string | number = "ABC123";
id = 456;

console.log("ID:", id);

// any y unknown
// any: permite asignar cualquier tipo de valor y desactiva la verificación de tipos.
// unknown: acepta cualquier valor, pero obliga a verificar su tipo antes de utilizarlo.

let cualquierCosa: any = "Texto";
cualquierCosa = 42;
cualquierCosa = true;

let dato: unknown = "Hola";

console.log("Valor any:", cualquierCosa);

if (typeof dato === "string") {
    console.log("Valor unknown:", dato.toUpperCase());
}
