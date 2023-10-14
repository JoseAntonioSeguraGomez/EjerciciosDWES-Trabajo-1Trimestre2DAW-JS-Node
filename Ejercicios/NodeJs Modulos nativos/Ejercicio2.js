const readline = require('readline');
const fs = require('fs');
const path = require('path');

let eleccionUsuario = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Menú:");
console.log("1. Crear nueva nota");
console.log("2. Editar nota existente");
console.log("3. Eliminar nota");


eleccionUsuario.question("Por favor, elige una opción (1/2/3): ", (opcion) => {
    if (opcion === '1') {
      console.log("Has elegido la opción 1: Crear nueva nota:");
      eleccionUsuario.question("Introduza a continuación el nombre de la nota que deseas crear:", (nombre) => {
        try {
          const archivoPath = path.resolve('./NodeJs Modulos nativos', nombre);
        } catch {
          console.log('El nombre del fichero ya existe.')
        }
      })
      eleccionUsuario.question("Ahora introzca el contenido que desea agregar:", (contenido) => {
        fs.writeFile(nombre, contenido, (err) => {
          if (err) {
            console.error('Error al crear el fichero', err);
          } else {
            console.log('Fichero creado con exito');
          }
        })
      });
    } else if (opcion === '2') {
      console.log("Has elegido la opción 2: Editar nota existente");
      // Coloca aquí la lógica para editar una nota existente
    } else if (opcion === '3') {
      console.log("Has elegido la opción 3: Eliminar nota");
      // Coloca aquí la lógica para eliminar una nota
    } else {
      console.log("Opción no válida");
    }
  
    rl.close();
  });