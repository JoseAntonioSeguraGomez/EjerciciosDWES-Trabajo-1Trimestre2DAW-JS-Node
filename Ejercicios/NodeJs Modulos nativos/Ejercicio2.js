const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Menú:");
console.log("1. Crear nueva nota");
console.log("2. Editar nota existente");
console.log("3. Eliminar nota");


rl.question("Por favor, elige una opción (1/2/3): ", (opcion) => {
    if (opcion === '1') {
      console.log("Has elegido la opción 1: Crear nueva nota");
      // Coloca aquí la lógica para crear una nueva nota
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