export function headersController(req, res) {
  res.send(req.headers);
};

/*export function queryController(req, res){
  const queries = Object.entries(req.query).map(([key, value]) => `<li><b>${key}</b>: ${value}</li>`);
  res.send(`<ul>${queries.join('')}</ul>`);
}*/

export function paramsController(req, res){
  res.send(req.params.name);
}

export function greetingsController(req, res){
  res.send(`Hola ${req.params.name}!`);
}

/*export function bodyController(req, res){
  res.send(req.body);
}*/

// Ejercicio 1
export function headerController(req, res) {
  const token = req.header.token;

  if (!token) {
    return res.status(401).json({
      code: 401,
      error: "Unauthorized",
      message: "Error: Set a token to login",
    });
  }

  console.log("Token:", token);
  res.send(req.header);
};

//Ejercicio 2
export function nameController(req, res){
  res.send('Hola' + req.params.name);
}

// Ejercicio 3
export function queryController(req, res) {
  const n = parseInt(req.query.n) || 100;

  if (isNaN(n) || n < 1) {
    return res.status(400).json({
      code: 400,
      error: "Bad Request",
      message: "Invalid value for 'n'. Please provide a positive integer.",
    });
  } else {
      const sum = (n * (n + 1)) / 2;
      res.send(`El resultado de la suma de 1 al número ${n} = ${sum}`);
  }
};

// Ejercicio 4
export function bodyController(req, res) {
  const requestBody = req.body;

  if (!requestBody || Object.keys(requestBody).length === 0) {
    return res.status(400).json({
      code: 400,
      error: "Bad Request",
      message: "Empty request body. Please provide valid data.",
    });
  }

  const htmlList = Object.entries(requestBody)
    .map(([key, value]) => `<li><b>${key}</b>: ${value}</li>`)
    .join('');

  res.status(200).send(`<ul>${htmlList}</ul>`);
}

// Ejercicio 6
export function notFoundController(req, res) {
  res.status(404).json({
    code: 404,
    error: "Not Found",
    message: "Error: Path not found",
  });
}
