function getStudentsWithNamesAndTopNotes(students) {
	const arrEstudiantes = [];
	let notaAlta = 0;
	
	for(let i = 0;i < students.length; i++){
		if(students[i].notes.length > 0 ){
			notaAlta = Math.max(...students[i].notes)
		}
		
    arrEstudiantes.push({ name: students[i].name, topNote: notaAlta });
	}
	
	return arrEstudiantes;
}