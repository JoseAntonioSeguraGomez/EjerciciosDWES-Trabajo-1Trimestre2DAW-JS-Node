import test from 'ava';
import { findUser } from '../src/services/users.js';

const users = [
    { id: '0', name: 'admin', password: '$2b$10$ZvXynCXOVcbA/vTXkmTr2ecVWC2NTX86n6KsyiWnwSQpNfvETA1j6' }
];

test('findUser should return the correct user', t => {
    const user = findUser('name', 'admin');
    t.deepEqual(user, users[1]);
});

test('findUser should return undefined for non-existent user', t => {
    const user = findUser('name', 'nonexistent');
    t.is(user, undefined);
});