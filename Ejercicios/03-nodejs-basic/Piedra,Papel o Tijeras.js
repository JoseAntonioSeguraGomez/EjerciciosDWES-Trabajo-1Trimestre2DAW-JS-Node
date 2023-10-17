const usuario = 'Tijeras';

function eleccionMaquina(){
    let opciones = ['Piedra', 'Papel', 'Tijeras'];
    let maquina = opciones[Math.floor(Math.random() * 3)];

    return maquina;
}

const maquina = eleccionMaquina();

function quienGana(eleccionUsuario, eleccionMaquina){
    if(usuario === maquina){
         return 'Empate';
    }else if((usuario === 'Piedra' && maquina === 'Tijeras')||
    (usuario === 'Papel' && maquina === 'Piedra')||
    (usuario === 'Tijeras' && maquina === 'Papel')){
        return 'Victoria';
    }else{
        return 'Has perdido';
    }
}

console.log('Elegiste ' + usuario + ' y la máquina ' + maquina + ': ' + quienGana(usuario, maquina));
