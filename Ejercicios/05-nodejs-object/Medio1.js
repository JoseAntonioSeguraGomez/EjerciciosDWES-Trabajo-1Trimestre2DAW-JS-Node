function invert(o) {
	const claves = Object.keys(o);
	const valores = Object.values(o);
	const objeto = {};

	for(let i = 0; i < claves.length; i++){
		const clave = claves[i];
		const valor = valores[i];
		objeto[valor] = clave;
	}
	return objeto;
}