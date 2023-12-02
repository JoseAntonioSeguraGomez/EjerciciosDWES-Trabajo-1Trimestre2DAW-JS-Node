import readline from 'readline';
import fs from 'fs';
import path from 'path';

const directorio = 'C:/Users/joans/Documents/GitHub/DWES/Ejercicios/trabajo-definitivo/files';

function FileList() {
    try {
        return fs.readdirSync(directorio);
    } catch (error) {
        console.error(`Error FileList: ${error.message}`);
        return [];
    }
}

export function getPepe(req, res){
    res.send('hola pepe');
}

export function getNotes(req, res) {
    const archivos = FileList();
  
    const files = archivos.filter((archivo) => path.extname(archivo) === '.note');
  
    if (files.length === 0) {
      res.send('No hay archivos .note en el directorio.');
      return;
    }
  
    const nombresArchivos = files.map((archivo, index) => `${index}. ${archivo}`);

    res.send(`Archivos .note en el directorio:\n${nombresArchivos.join('\n')}`);
  };

  
  export function postNote(req, res, next){
    res.send('hola');

  }
  
  export function updateNote(req, res, next) {
    res.send('hola');

  }
  
  export function deleteNote(req, res) {
    res.send('hola');

  }