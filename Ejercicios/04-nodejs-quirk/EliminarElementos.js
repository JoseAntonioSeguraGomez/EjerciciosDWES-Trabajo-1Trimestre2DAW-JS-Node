const arr = [7, 8, 12, 29, 124, 13, 17, 18, 144];

const arrMayor18 = arr.filter(function(numero) {
  return numero >= 18;
});

console.log(arrMayor18);