const palabraUsuario = "xocas";

const tamano = palabraUsuario.length;
let caracterX = 0;
let caracterY = 0;

for(let i = 0; i < tamano; i++){
    const caracter = palabraUsuario[i];

    if(caracter === 'x'){
        caracterX = caracterX + 1;
    }else if (caracter === 'o'){
        caracterY = caracterY + 1
    }
}

if(caracterX === caracterY){
    console.log(true);
}else{
    console.log(false);
}