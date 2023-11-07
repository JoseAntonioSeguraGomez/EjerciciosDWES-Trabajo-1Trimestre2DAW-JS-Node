import express from 'express';
import {
  lanzarDados, casillasEspeciales, elJuegoFinalizado, comprobarPosicion, ganador,
} from './lanzarDados.js';

const server = express();
const port = 3000;

// Puntuación Jugadores:
let posicionJugador = 1;
let posicionMaquina = 1;
let juegoFinalizado = false;
let dados = 0;
let turnos = 1;
let nombreJugador;

server.get('/', (req, res) => {
  if (juegoFinalizado === false) {
    res.send(`
      <h1>Bienvenido al juego de la OCA</h1>
      <form action="/guardar-nombre" method="get">
        <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre" required>
        <button type="submit">Guardar</button>
      </form>
    `);
  } else {
    res.send('<h1>El juego ha acabado, reinicie.</h1>');
  }
});

server.get('/guardar-nombre', (req, res) => {
  const { nombre } = req.query;
  if (nombre) {
    nombreJugador = nombre;
    res.send(`<h1>¡Bienvenido al juego de la OCA, ${nombreJugador}!</h1>
    <a href='http://localhost:3000/lanzar-dados'><h2>Empieza a jugar ya</h2></a>
    <img src='https://aprenderenfamiliablog.files.wordpress.com/2021/04/instrucciones-como-jugar-a-la-oca.jpg?w=792'>`);
  } else {
    res.send('<h1>Por favor, ingresa un nombre válido.</h1>');
  }
});

server.get('/lanzar-dados', (req, res) => {
  if (nombreJugador === undefined) {
    res.send('<h1>Debes introducir tu nombre.</h1>');
  } else if (turnos % 2 === 1) {
    if (juegoFinalizado === false) {
      dados = lanzarDados();
      posicionJugador = comprobarPosicion(posicionJugador, dados);
      posicionJugador = casillasEspeciales(posicionJugador);

      res.send(`<h1>Turno: ${turnos}.</h1><h2>  ${nombreJugador} lanza los dados: ${dados}</h2>
        <br><a href='http://localhost:3000/lanzar-dados'><h2>Lanzar dado</h2></a>
        <a href='http://localhost:3000/estado'><h2>Ver estado</h2></a>`);
      turnos += 1;
      juegoFinalizado = elJuegoFinalizado(posicionJugador);
    }
    res.send(`<h1>Juego finalizado</h1>${ganador(posicionJugador, posicionMaquina, nombreJugador)}`);
  } else if (turnos % 2 === 0) {
    if (juegoFinalizado === false) {
      dados = lanzarDados();
      posicionMaquina = comprobarPosicion(posicionMaquina, dados);
      posicionMaquina = casillasEspeciales(posicionMaquina);

      res.send(`<h1>Turno: ${turnos}.</h1><h2>  Máquina lanza los dados: ${dados}</h2>
      <br><a href='http://localhost:3000/lanzar-dados'><h2>Lanzar dado</h2></a>
      <a href='http://localhost:3000/estado'><h2>Ver estado</h2></a>`);
      turnos += 1;
      juegoFinalizado = elJuegoFinalizado(posicionMaquina);
    }
    res.send(`<h1>Juego finalizado</h1>${ganador(posicionJugador, posicionMaquina, nombreJugador)}`);
  }
});

server.get('/estado', (req, res) => {
  res.send(`<h1>Puntuación: </h1>
  <h2>Posición del ${nombreJugador} = ${posicionJugador}</h2>
  <h2>Posición de la Máquina = ${posicionMaquina}</h2>
  <br><a href='http://localhost:3000/lanzar-dados'><h2>Seguir jugando</h2></a>`);
});

server.get('/reiniciar', (req, res) => {
  if (juegoFinalizado === true) {
    posicionJugador = 1;
    posicionMaquina = 1;
    juegoFinalizado = false;
    dados = 0;
    turnos = 1;
    res.send('<h1>Juego reiniciado. Comienza de nuevo.</h1><a href=\'http://localhost:3000/\'><h2>Reanudar</h2></a>');
  } else {
    res.send('<h1>No hagas trampas</h1>');
  }
});

server.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`);
});
