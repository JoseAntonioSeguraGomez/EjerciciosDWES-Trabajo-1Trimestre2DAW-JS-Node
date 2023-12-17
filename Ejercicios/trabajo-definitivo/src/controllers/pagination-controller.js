import { FileList } from './notes-controller.js';
import fs from 'fs';
import path from 'path';

// Directorio de los ficheros
const directorio = 'C:/Users/joans/Documents/GitHub/DWES/Ejercicios/trabajo-definitivo/files';

export function getNotesWithOptions(req, res, next) {
    // Datos que puede recoger
    const { sortBy, filterText, page, pageSize, sortOrder } = req.query;

    // Lista de ficheros
    const archivos = FileList();
    const files = archivos.filter((archivo) => path.extname(archivo) === '.note');

    // Filtro
    const filteredFiles = filterText
        ? files.filter((file) => file.toLowerCase().includes(filterText.toLowerCase()))
        : files;

    let sortedFiles;

    // Ordenar por titulo y tamaño
    if (sortBy === 'title') {
        sortedFiles = filteredFiles.slice().sort((a, b) => {
            const compareResult = a.localeCompare(b);
            return sortOrder === 'desc' ? -compareResult : compareResult;
        });
    } else if (sortBy === 'size') {
        sortedFiles = filteredFiles.slice().sort((fileA, fileB) => {
            try {
                const filePathA = path.join(directorio, fileA);
                const filePathB = path.join(directorio, fileB);
                const statsA = fs.statSync(filePathA);
                const statsB = fs.statSync(filePathB);
                const compareResult = statsA.size - statsB.size;
                return sortOrder === 'desc' ? -compareResult : compareResult;
            } catch (error) {
                console.error(`Error al obtener el tamaño del archivo: ${error.message}`);
                return 0;
            }
        });
    } else {
        sortedFiles = filteredFiles;
    }

    // Resultado y paginado
    const totalItems = sortedFiles.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const currentPage = Math.min(Math.max(1, page || 1), totalPages);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalItems);

    const paginatedFiles = sortedFiles.slice(startIndex, endIndex);

    try {
        res.json({
            totalPages,
            currentPage,
            pageSize,
            notes: paginatedFiles.map((file, index) => `${startIndex + index + 1}. ${file}`),
        });
    } catch (error) {
        console.error(`Error al obtener las notas: ${error.message}`);
        next(error);
    }
}