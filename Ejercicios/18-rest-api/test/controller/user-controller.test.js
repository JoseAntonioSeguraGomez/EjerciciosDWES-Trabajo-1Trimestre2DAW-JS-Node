import test from 'ava';
import {
  getUsers,
  getUser,
  postUser,
  updateUser,
  deleteUser,
} from '../../src/controllers/users-controller.js';

let testUsers = [];

test.beforeEach(() => {
  testUsers = [
    { id: '1', name: 'Jose', age: 19, genre: 'male' },
    { id: '2', name: 'Pepe', age: 60, genre: 'male' },
    { id: '3', name: 'Paula', age: 49, genre: 'female' },
  ];
});

test('getUsers should return all users', (t) => {
  const req = {};
  const res = {
    send: (data) => {
      t.deepEqual(data, testUsers);
    },
  };

  getUsers(req, res);
});

test('getUser should return a specific user by ID', (t) => {
  const req = { params: { id: '2' } };
  const res = {
    send: (data) => {
      t.deepEqual(data, { id: '2', name: 'Pepe', age: 60, genre: 'male' });
    },
  };

  getUser(req, res);
});

test('postUser should create a new user', (t) => {
  const req = {
    body: { name: 'NewUser', age: 25, genre: 'female' },
  };
  const res = {
    status: (code) => ({
      send: (data) => {
        t.is(code, 201);
        t.deepEqual(data, { id: '4', name: 'NewUser', age: 25, genre: 'female' });
      },
    }),
  };

  postUser(req, res);
});

test('updateUser should update an existing user', (t) => {
  const req = {
    params: { id: '1' },
    body: { name: 'UpdatedUser' },
  };
  const res = {
    send: (data) => {
      t.deepEqual(data, { id: '1', name: 'UpdatedUser', age: 19, genre: 'male' });
    },
  };

  updateUser(req, res);
});

test('deleteUser should delete an existing user', (t) => {
    const originalUser = { ...testUsers.find(u => u.id === '1') };

    const reqUpdate = {
      params: { id: '1' },
      body: { name: 'UpdatedUser' },
    };
    const resUpdate = {
      send: (data) => {
        t.deepEqual(data, { id: '1', name: 'UpdatedUser', age: 19, genre: 'male' });
      },
    };

    updateUser(reqUpdate, resUpdate);

    const reqDelete = {
      params: { id: '1' },
    };
    const resDelete = {
      status: (code) => ({
        send: (data) => {
          t.is(code, 200); 
          t.deepEqual(data, { id: '1', name: 'UpdatedUser', age: 19, genre: 'male' });
        },
      }),
    };
  
    deleteUser(reqDelete, resDelete);
  
    const userIndex = testUsers.findIndex(u => u.id === '1');
    if (userIndex !== -1) {
      testUsers[userIndex] = originalUser;
    }
});
