
export {};

// función básica
function sumar(a: number, b: number): number {
    return a + b;
}

console.log("Suma:", sumar(5, 3));

// parámetro opcional (?)
// el apellido se puede proporcionar o no.
function saludar(nombre: string, apellido?: string): string {
    return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}

console.log(saludar("Marcos", "Perlo"));
console.log(saludar("Marcos"));

// parámetro por defecto
// si no se indica un rol, se utiliza USER automáticamente.
function crear(nombre: string, rol: string = "USER"): string {
    return `Usuario ${nombre} con rol ${rol}`;
}

console.log(crear("Marcos"));
console.log(crear("Marcos", "ADMIN"));

// arrow function
const multiplicar = (a: number, b: number): number => a * b;

console.log("Multiplicación:", multiplicar(4, 5));

// rest parameters
function sumarTodos(...nums: number[]): number {
    return nums.reduce((total, n) => total + n, 0);
}

console.log("Suma de varios números:", sumarTodos(1, 2, 3, 4));

// función asíncrona
async function obtenerTitulo(): Promise<string> {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const datos: unknown = await respuesta.json();

    if (typeof datos === "object" && datos !== null && "title" in datos) {
        return String(datos.title);
    }

    return "Sin título";
}

obtenerTitulo().then(console.log);