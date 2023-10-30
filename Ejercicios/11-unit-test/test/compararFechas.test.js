//loculon de ejercicio (no idea)

import test from 'ava';
import { dateCompare } from '../src/compararFechas.js';

function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;
}

test('Comprobación de fecha con dos fechas proporcionadas', t => {
    const result = dateCompare(new Date('2023-10-25'), new Date('2021-08-21'));
    const { startDate, endDate } = result;
    const earlierDate = startDate < endDate ? new Date(startDate) : new Date(endDate);
    const laterDate = startDate < endDate ? new Date(endDate) : new Date(startDate);
    console.log(`La fecha anterior es: ${formatDate(earlierDate)}, y la fecha posterior es: ${formatDate(laterDate)}`);
    t.deepEqual(result, { startDate: '2021-08-21T00:00:00.000Z', endDate: '2023-10-25T00:00:00.000Z' });
});

test('Comprobación de fecha con una fecha proporcionada', t => {
    const result = dateCompare(new Date('1993-11-15'));
    const currentDate = new Date();
    const startDate = new Date('1993-11-15');
    const earlierDate = startDate < currentDate ? startDate : currentDate;
    const laterDate = startDate < currentDate ? currentDate : startDate;
    console.log(`La fecha anterior es: ${formatDate(earlierDate)}, y la fecha posterior es: ${formatDate(laterDate)}`);
    if (startDate < currentDate) {
        t.deepEqual(result, { startDate: startDate.toISOString(), endDate: currentDate.toISOString() });
    } else {
        t.deepEqual(result, { startDate: currentDate.toISOString(), endDate: startDate.toISOString() });
    }
});