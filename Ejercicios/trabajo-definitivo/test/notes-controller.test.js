import test from 'ava';
import fs from 'fs';
import path from 'path';
import {
  FileList,
  getNotes,
  getNoteContent,
  postNote,
  updateNote, 
  deleteNote,
  importNote,
  exportNote,
} from '../../src/controllers/notes-controller.js';

const testDirectory = 'C:/Users/joans/Documents/GitHub/DWES/Ejercicios/trabajo-definitivo/test/files';

const testFilePath = path.join(testDirectory, 'test-note.note');
const testNoteName = 'test-note';
const testNoteContent = 'This is a test note.';

test.before(() => {
  if (!fs.existsSync(testDirectory)) {
    fs.mkdirSync(testDirectory);
  }

  fs.writeFileSync(testFilePath, testNoteContent);
});

test.after(() => {
  if (fs.existsSync(testFilePath)) {
    fs.unlinkSync(testFilePath);
  }
  if (fs.existsSync(testDirectory)) {
    fs.rmdirSync(testDirectory);
  }
});

test('FileList function should return an array of files', (t) => {
  const fileList = FileList();
  t.true(Array.isArray(fileList));
});


test('postNote function should create a new note with status code 201', async (t) => {
  const req = {
    params: { name: testNoteName },
    body: { contenido: testNoteContent },
  };
  const res = {
    send: (data) => {
      t.true(data.includes(testNoteName));
    },
    status: (code) => {
      t.is(code, 201);
      return res;
    },
  };

  await postNote(req, res);
});

test('getNotes function should return a list of .note files with status code 200', async (t) => {
  const req = {};
  const res = {
    send: (data) => {
      t.true(data.includes('.note'));
    },
    status: (code) => {
      t.is(code, 200);
      return res;
    },
  };

  await getNotes(req, res);
});

test('getNoteContent function should return the content of a note with status code 200', async (t) => {
  const req = { params: { name: testNoteName } };
  const res = {
    send: (data) => {
      t.true(data.includes(testNoteContent));
    },
    status: (code) => {
      t.is(code, 200);
      return res;
    },
  };

  await getNoteContent(req, res);
});

test('updateNote function should edit the content of an existing note with status code 200', async (t) => {
  const req = {
    params: { name: testNoteName },
    body: { contenido: 'Updated test note content.' },
  };
  const res = {
    send: (data) => {
      t.true(data.includes('Nota editada con éxito:'));
    },
    status: (code) => {
      t.is(code, 200);
      return res;
    },
  };

  await updateNote(req, res);
});

/*
test('importNote function should import new notes with status code 201', async (t) => {
  const req = {
    file: {
      testFile1: { name: 'imported-note-1.note' },
    },
  };
  const res = {
    send: (data) => {
      t.true(data.includes('Notas importadas con éxito'));
    },
    status: (code) => {
      t.is(code, 200);
      return res;
    },
  };

  await importNote(req, res);
});
*/
test('exportNote function should export an existing note with status code 200', async (t) => {
  const req = { params: { name: testNoteName } };
  const res = {
    download: (filePath, fileName) => {
      t.is(filePath, path.join(testDirectory, `${testNoteName}.note`));
      t.is(fileName, `${testNoteName}.note`);
    },
    status: (code) => {
      t.is(code, 200);
      return res;
    },
  };

  await exportNote(req, res);

});

test('deleteNote function should delete an existing note with status code 202', async (t) => {
  const req = { params: { name: testNoteName } };
  const res = {
    send: (data) => {
      t.true(data.includes('eliminada con éxito'));
    },
    status: (code) => {
      t.is(code, 202);
      return res;
    },
  };

  await deleteNote(req, res);
});