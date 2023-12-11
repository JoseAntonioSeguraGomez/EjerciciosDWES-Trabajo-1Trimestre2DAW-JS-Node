import fs from 'fs';
import path from 'path';

//Ruta de los ficheros
const directorio = 'C:/Users/joans/Documents/GitHub/DWES/Ejercicios/trabajo-definitivo/files';

export function FileList() {
    try {
        return fs.readdirSync(directorio);
    } catch (error) {
        console.error(`Error FileList: ${error.message}`);
        return [];
    }
}

//Obtener ficheros existentes
export function getNotes(req, res, next) {
    //Recojo todos los ficheros
    const archivos = FileList();
    const files = archivos.filter((archivo) => path.extname(archivo) === '.note');
  
    //No existen ficheros
    if (files.length === 0) {
      res.send('No hay archivos .note en el directorio.');
      return;
    }
  
    // Ordena los nombres y listarlos de forma ordenada
    const nombresArchivos = files.reverse().map((archivo, index) => `${index}. ${archivo}`);
    
    try {
    //Muestra los ficheros que contiene el directorio Files
    res.send(`Archivos .note en el directorio:\n${nombresArchivos.join('\n')}`);
    } catch (error) {
        console.error(`Error al obtener las notas: ${error.message}`);
        next(error);
    }
};

//Mostrar contenido de un fichero
export function getNoteContent(req, res, next) {
    const nombreNota = req.params.name;

    if (!nombreNota) {
        res.status(400).send('Nombre de la nota no proporcionado.');
        return;
    }

    const rutaNota = path.join(directorio, `${nombreNota}.note`);

    try {
        if (fs.existsSync(rutaNota)) {
            const contenido = fs.readFileSync(rutaNota, 'utf-8');
            res.send(`Contenido de la nota ${nombreNota}:\n${contenido}`);
        } else {
            res.status(404).send(`La nota con nombre ${nombreNota} no existe.`);
        }
    } catch (error) {
        console.error(`Error al leer el contenido de la nota: ${error.message}`);
        next(error);
    }
}

//Crear nuevos ficheros y su respectivo contenido.
export function postNote(req, res, next) {
    const nombreNota = req.params.name;
    const contenidoNota = req.body.contenido; 

    if (!nombreNota || !contenidoNota) {
        res.status(400).send('Nombre de la nota o contenido no proporcionado.');
        return;
    }

    const rutaNota = path.join(directorio, `${nombreNota}.note`);

    try {
        // Escribir el contenido en el archivo de la nota
        fs.writeFileSync(rutaNota, contenidoNota);
        res.send(`Nota creada con éxito: ${nombreNota}`);
    } catch (error) {
        console.error(`Error al escribir en el archivo de la nota: ${error.message}`);
        next(error);
    }
}

//Editar contenido de un fichero existente
export function updateNote(req, res, next) {
    const nombreNota = req.params.name;
    const contenidoNota = req.body.contenido; 

    if (!nombreNota || !contenidoNota) {
        res.status(400).send('Nombre de la nota o contenido no proporcionado.');
        return;
    }

    const rutaNota = path.join(directorio, `${nombreNota}.note`);

    try {
        if (fs.existsSync(rutaNota)) {
            fs.writeFileSync(rutaNota, contenidoNota);
            res.send(`Nota editada con éxito: ${nombreNota}`);
        } else {
            res.status(404).send(`La nota con nombre ${nombreNota} no existe.`);
        }
    } catch (error) {
        console.error(`Error al editar la nota: ${error.message}`);
        next(error);
    }
}
  
//Eliminar ficheros segun su nombre.
export function deleteNote(req, res, next) {
    const nombreNota = req.params.name;

    if (!nombreNota) {
        res.status(400).send('Nombre de la nota no proporcionado.');
        return;
    }

    const rutaNota = path.join(directorio, `${nombreNota}.note`);

    try {
        if (fs.existsSync(rutaNota)) {
            fs.unlinkSync(rutaNota);
            res.send(`La nota ha sido eliminada con éxito: ${nombreNota}`);
        } else {
            res.status(404).send(`La nota con el nombre ${nombreNota} no existe en el directorio Files.`);
        }
    } catch (error) {
        console.error(`Error al eliminar la nota: ${error.message}`);
        next(error);
    }
}

export function importNote(req, res, next) {
    const files = req.files;

    if (!files || Object.keys(files).length === 0) {
        res.status(400).send('No se proporcionaron archivos para importar.');
        return;
    }


    try {
        Object.values(files).forEach((file) => {
            //Ruta del directorio con el fichero
            const filePath = path.join(directorio, file.name);

            // En caso de que exista dicha ruta entonces me devuelva un error.
            if (fs.existsSync(filePath)) {
                console.log(`El fichero ${file.name} ya existe en el directorio.`);
                res.status(400).send(`El fichero ${file.name} ya existe en el directorio.`);
                return;
            }

            file.mv(filePath, (err) => {
                if (err) {
                    console.error(`Error al importar el archivo ${file.name}: ${err.message}`);
                    next(err);
                }
            });
        });

        res.send('Notas importadas con éxito.');
    } catch (error) {
        console.error(`Error al importar notas: ${error.message}`);
        next(error);
    }
}

// Exportar una nota
export function exportNote(req, res, next) {
    const nombreNota = req.params.name;

    if (!nombreNota) {
        res.status(400).send('Nombre de la nota no proporcionado.');
        return;
    }

    const rutaNota = path.join(directorio, `${nombreNota}.note`);

    try {
        if (fs.existsSync(rutaNota)) {
            res.download(rutaNota, `${nombreNota}.note`);
        } else {
            res.status(404).send(`La nota con nombre ${nombreNota} no existe.`);
        }
    } catch (error) {
        console.error(`Error al exportar la nota: ${error.message}`);
        next(error);
    }
}
