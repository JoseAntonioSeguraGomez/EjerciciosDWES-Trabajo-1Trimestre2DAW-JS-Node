const fs = require('fs');

const nombreFichero ='Fichero.txt';

//Manera sincrona
try {
    const data = fs.readFileSync(`C:/Users/joans/Documents/GitHub/DWES/Ejercicios/NodeJs Modulos nativos/${nombreFichero}`, 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
}

//Manera asincrona
fs.readFile(`C:/Users/joans/Documents/GitHub/DWES/Ejercicios/NodeJs Modulos nativos/${nombreFichero}`, 'utf8', (error, datos) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(datos);
  });

  console.log("..................................");
