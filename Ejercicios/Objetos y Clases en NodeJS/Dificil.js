//Locura de ejercicio, no entendi.

function isSimilar(arrX, arrY) {
    if (typeof arrX !== typeof arrY) {
      return false;
    }
    if (Array.isArray(arrX)) {
      if (!Array.isArray(arrY) || arrX.length !== arrY.length) {
        return false;
      }
      for (let i = 0; i < arrX.length; i++) {
        if (!isSimilar(arrX[i], arrY[i])) {
          return false;
        }
      }
      return true;
    }
    if (arrX instanceof Map) {
      if (!(arrY instanceof Map) || arrX.size !== arrY.size) {
        return false;
      }
      for (const [key, value] of arrX) {
        if (!arrY.has(key) || !isSimilar(value, arrY.get(key))) {
          return false;
        }
      }
      return true;
    }
  
    if (typeof arrX === 'object' && arrX !== null) {
      const keysX = Object.keys(arrX);
      const keysY = Object.keys(arrY);
  
      if (keysX.length !== keysY.length) {
        return false;
      }
      for (const key of keysX) {
        if (!arrY.hasOwnProperty(key) || !isSimilar(arrX[key], arrY[key])) {
          return false;
        }
      }
      return true;
    }
    return arrX === arrY;
  }