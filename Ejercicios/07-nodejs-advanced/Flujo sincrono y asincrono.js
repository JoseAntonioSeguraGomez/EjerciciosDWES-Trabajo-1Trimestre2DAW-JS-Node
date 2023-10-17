console.log("Ejemplo Sincrono");

function funcionSincrona() {
    console.log("Hola soy una tarea sincrona");
}

funcionSincrona(); 

console.log("Ejemplo Asincrono");

setTimeout(function() {
  console.log("Hola soy una tarea asíncrona");
}, 1000);

console.log("JAJA ME COLE!");
