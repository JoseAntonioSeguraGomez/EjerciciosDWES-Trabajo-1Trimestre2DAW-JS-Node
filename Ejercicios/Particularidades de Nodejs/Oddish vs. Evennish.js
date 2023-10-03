function oddishOrEvenish(num) {
    const numeroString = num.toString();
    const numeroSeparado = [];

    for (const numero of numeroString) {
        numeroSeparado.push(parseInt(numero))
    } 
    const resultado = imparPar(numeroSeparado);

    if (resultado === 0) {
        return "Evenish";
    } else {
        return "Oddish";
    }
}

function imparPar(arr) {
    let resultado = 0;

    for (let i = 0; i < arr.length; i++) {
        resultado = resultado + arr[i];
    }

    return resultado % 2;
}
