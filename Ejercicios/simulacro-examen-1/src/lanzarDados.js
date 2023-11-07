// Lanzar dados
export const lanzarDados = () => Math.floor(Math.random() * 6) + 1;

// Casillas especiales
export const casillasEspeciales = (posicion) => {
  if (posicion === 5) {
    return 9;
  } if (posicion === 6) {
    return 12;
  } if (posicion === 9) {
    return 14;
  } if (posicion === 12) {
    return 6;
  } if (posicion === 58) {
    return 1;
  }

  return posicion;
};

// Juego finalizado
export const elJuegoFinalizado = (posicion) => posicion === 63;

export const ganador = (posicionJugador, posicionMaquina, nombreJugador) => {
  if (posicionJugador === 63) {
    return `<h2>Ha ganado el ${nombreJugador}</h2><br><a href='http://localhost:3000/reiniciar'>Reiniciar Partida</a>`;
  } if (posicionMaquina === 63) {
    return '<h2>Ha ganado la Máquina</h2><br><a href=\'http://localhost:3000/reiniciar\'>Reiniciar Partida</a>';
  }
};

// Comprobar posicion
export const comprobarPosicion = (posicion, dados) => {
  if (posicion + dados > 63) {
    const exceso = (posicion + dados) - 63;
    return 63 - exceso;
  }
  return posicion + dados;
};
