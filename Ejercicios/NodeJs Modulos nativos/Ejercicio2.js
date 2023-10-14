const readline = require('readline');
const fs = require('fs');
const path = require('path');

const eleccionUsuario = readline.createInterface({
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
    eleccionUsuario.question("Introduzca a continuación el nombre de la nota que desea crear:", (nombre) => {
      const archivoPath = path.resolve('./NodeJs Modulos nativos', nombre);
      eleccionUsuario.question("Ahora introduzca el contenido que desea agregar:", (contenido) => {
        fs.writeFile(archivoPath, contenido, (err) => {
          if (err) {
            console.error('Error al crear el fichero', err);
          } else {
            console.log('Fichero creado con éxito');
          }
          eleccionUsuario.close();
        });
      });
    });
  } else if (opcion === '2') {
    console.log("Has elegido la opción 2: Editar nota existente");
    // Coloca aquí la lógica para editar una nota existente
  } else if (opcion === '3') {
    console.log("Has elegido la opción 3: Eliminar nota");
    // Coloca aquí la lógica para eliminar una nota
  } else {
    console.log("Opción no válida");
    eleccionUsuario.close();
  }
});