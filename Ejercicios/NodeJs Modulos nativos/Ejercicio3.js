function decomposeUrl(url) {
  // Función para verificar si una cadena es una dirección IP válida.
  function isValidIP(ip) {
      const octets = ip.split('.');
      if (octets.length !== 4) return false;
      return octets.every(octet => {
          const num = parseInt(octet, 10);
          return !isNaN(num) && num >= 0 && num <= 255;
      });
  }

  // Objeto para almacenar los componentes descompuestos de la URL.
  const result = {
      protocol: null,
      ipAdress: null,
      subDomain: null,
      domainName: null,
      folderTree: null,
      targetFile: null,
      argumentsFile: null
  };

  // Manejar casos de protocolos no estándar y eliminar el protocolo de la URL.
  const protocolMatch = url.match(/^([a-zA-Z]+):\/\//i);
  if (protocolMatch) {
      result.protocol = protocolMatch[1];
      url = url.slice(protocolMatch[0].length); 
  } else if (url.startsWith('file://')) {
      result.protocol = 'file';
      url = url.slice(7);
  }

  // Dividir la URL en partes como host y búsqueda.
  const [hostnamePath, search] = url.split('?');
  const [hostname, ...pathParts] = hostnamePath.split('/');

  // Utilizar una expresión regular para verificar si el host parece una dirección IP.
  const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
  if (ipRegex.test(hostname)) {
      // Si parece una dirección IP, validarla aún más.
      if (isValidIP(hostname)) {
          result.ipAdress = hostname;
      } else {
          // Si no es una IP válida, considerarla como un nombre de dominio.
          result.domainName = hostname;
      }
  } else {
      // Si no es una IP, procesar el dominio y subdominio.
      const hostnameParts = hostname.split('.');
      if (hostnameParts.length > 2) {
          result.subDomain = hostnameParts[0];
          hostnameParts.shift();  
      }
      result.domainName = hostnameParts.join('.');
  }

  // Procesar la ruta en caso de que haya una estructura de directorios.
  if (pathParts.length > 1) {
      result.targetFile = pathParts.pop();
      result.folderTree = pathParts;
  } else if (pathParts.length === 1 && pathParts[0]) {
      result.targetFile = pathParts[0];
  }

  // Establecer archivoDestino como null si está vacío.
  if (result.targetFile === '') {
      result.targetFile = null;
  }

  // Procesar la cadena de búsqueda, si está presente.
  if (search) {
      result.argumentsFile = `?${search}`;
  }

  return result;
}