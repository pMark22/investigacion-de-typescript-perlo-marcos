#Trabajo Práctico Integrador: Investigación en TypeScript

##Tema 1: ¿Qué es TypeScript?
● ¿Qué es TypeScript y quién lo desarrolla?
TypeScript es un superconjunto de JavaScript desarrollado por Microsoft

● ¿Qué diferencias tiene con JavaScript?
Que TypeScript es un superconjunto tipado de JS que detecta errores en tiempo de compilación y se transpila a JavaScript.

● ¿Qué ventajas ofrece?
Que detecta los errores en tiempo real antes de ejecutarse.
Mejora el autocompletado y la refactoriazion del codigo
Hace el codigo sea mas mantenible y escalable
Los tipos funcionan como documentacion del propio codigo

● ¿Cuál es su versión actual?

#Tema 2: Crear y ejecutar un proyecto
● ¿Cómo se instala TypeScript en un proyecto?
Se instala con "npm i -D typescript @types/node@24 tsx" 

● ¿Para qué sirve el archivo tsconfig.json?
Sirve para la configuracion del proyecto, e indica tres cosas:
1- Que archivos forman el proyecto "include".
2- Que tan estricto debe ser al verificar tipos: "strict" y opciones relacionadas.
3- Como generar el JavaScript

● ¿Qué hace el comando tsc?
El comando tsc es el compilador de typescript, este se encarga de revisar el código, detecta los errores de tipos y convierte los archivos typescript .ts en archivos .js, utilizando las configuraciones establecidas en tsconfig.json.

● ¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?
tsc: verifica los tipos y compila el código TypeScript a JavaScript.
tsx: permite ejecutar archivos TypeScript directamente, sin necesidad de compilarlos previamente. No verifica los tipos.
node: permite ejecutar archivos JavaScript. En las versiones actuales (Node.js 24 y 26), también puede ejecutar archivos .ts mediante type stripping, que elimina las anotaciones de tipos y ejecuta el JavaScript restante..


