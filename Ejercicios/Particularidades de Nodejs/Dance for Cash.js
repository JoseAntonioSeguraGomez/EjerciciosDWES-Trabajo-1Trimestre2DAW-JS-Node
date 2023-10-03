const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];

function danceConvert(pin) {
  const pinFinal = calcularIndice(pin);

  if (pinFinal === "Invalid input.") {
    return "Invalid input.";
  }

  const pinBailes = [];

  for (let i = 0; i < pinFinal.length; i++) {
    const index = pinFinal[i] % MOVES.length;
    pinBailes.push(MOVES[index]);
  }

  return pinBailes;
}

function calcularIndice(pin) {
  if (!/^\d{4}$/.test(pin)) {
    return "Invalid input.";
  }

  const pinCalculado = [];

  for (let i = 0; i < pin.length; i++) {
    const calculo = parseInt(pin[i]) + i;
    pinCalculado.push(calculo);
  }

  return pinCalculado;
}