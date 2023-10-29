export function dateCompare(startDate, endDate) {
    if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        if (start < end) {
            return { startDate: start.toISOString(), endDate: end.toISOString() };
        } else {
            return { startDate: end.toISOString(), endDate: start.toISOString() };
        }
    } else if (startDate) {
        const start = new Date(startDate);
        const currentDate = new Date();
        if (start < currentDate) {
            return { startDate: start.toISOString(), endDate: currentDate.toISOString() };
        } else {
            return { startDate: currentDate.toISOString(), endDate: start.toISOString() };
        }
    } else {
        throw new Error('Debe proporcionar al menos una fecha');
    }
}