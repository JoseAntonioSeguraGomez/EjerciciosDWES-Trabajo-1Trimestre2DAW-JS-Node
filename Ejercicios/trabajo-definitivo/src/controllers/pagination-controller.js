// Pagination.js
import _ from 'lodash';
import { FileList } from './notes-controller.js';
import fs from 'fs';
import path from 'path';

const directorio = 'C:/Users/joans/Documents/GitHub/DWES/Ejercicios/trabajo-definitivo/files';

export function getNotesWithOptions(req, res, next) {
    const { sortBy, filterText, page, pageSize } = req.query;

    const archivos = FileList();
    const files = archivos.filter((archivo) => path.extname(archivo) === '.note');

    const filteredFiles = filterText
        ? files.filter((file) => file.toLowerCase().includes(filterText.toLowerCase()))
        : files;

    let sortedFiles;

    if (sortBy === 'title') {
        sortedFiles = _.orderBy(filteredFiles, [(file) => file], ['asc']);
    } else if (sortBy === 'size') {
        sortedFiles = _.orderBy(filteredFiles, (file) => {
            try {
                const filePath = path.join(directorio, file);
                const stats = fs.statSync(filePath);
                return stats.size;
            } catch (error) {
                console.error(`Error al obtener el tamaño del archivo ${file}: ${error.message}`);
                return 0; // Puedes ajustar este valor predeterminado según tus necesidades
            }
        }, ['asc']);
    } else {
        sortedFiles = filteredFiles;
    }

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