function decomposeUrl(urlString) {
    try {
      const url = new URL(urlString);
      const domainParts = url.hostname.split('.');
      const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
  
      let protocol = url.protocol.replace(':', '');
      let ipAdress = null;
      let subDomain = null;
      let domainName = null;
      let folderTree = null;
      let targetFile = null;
      let argumentsFile = null;
  
      if (ipRegex.test(domainParts[0])) {
        ipAdress = domainParts[0];
      } else {
        subDomain = domainParts.length > 2 ? domainParts[0] : null;
        domainName = subDomain ? domainParts.slice(1).join('.') : domainParts.join('.');
      }
  
      const pathParts = url.pathname.split('/').filter(p => p);
      folderTree = pathParts.length > 1 ? pathParts.slice(0, -1) : null;
      targetFile = pathParts.length > 0 ? pathParts[pathParts.length - 1] : null;
      argumentsFile = url.search ? url.search : null;
  
      return {
        protocol,
        ipAdress,
        subDomain,
        domainName,
        folderTree,
        targetFile,
        argumentsFile,
      };
    } catch (e) {
      console.error("La URL es inválida");
      return null;
    }
  }
  
  // Ejemplo de uso
  const urlInfo = decomposeUrl("https://192.168.1.1/index.html");
  console.log(urlInfo);
  