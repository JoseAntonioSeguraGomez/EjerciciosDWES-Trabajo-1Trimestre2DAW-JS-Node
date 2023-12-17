const users = [
    {id: '0', name: 'admin', password: '$2b$10$ZvXynCXOVcbA/vTXkmTr2ecVWC2NTX86n6KsyiWnwSQpNfvETA1j6'}
];

export function findUser(key, value){
    return users.find(u => u.key === value);
}