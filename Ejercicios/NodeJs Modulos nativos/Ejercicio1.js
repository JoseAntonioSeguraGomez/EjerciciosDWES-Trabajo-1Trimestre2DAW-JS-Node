const fs = require('fs');

const nombreFichero ='Fichero.txt';

try {
    const data = fs.readFileSync(`C:/Users/joans/Documents/GitHub/DWES/Ejercicios/NodeJs Modulos nativos/${nombreFichero}`, 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
}