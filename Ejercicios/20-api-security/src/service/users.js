export const users = [
    { id:'1', name: 'jose',password:'$2b$10$GNOvuiuctlHH8/BV5zZJyOBLvrzdgFciFF5KzKSr5vCOUhSYrsS6u', age:19, genre:'male'},
    { id:'2', name: 'pepe',password:'$2b$10$YNtZA0LZzpYB8lVmhOLAZuWaeRguMx.S6MleQpL4nWyVtwUtwTUhe', age:60, genre:'male'},
    { id:'3', name: 'paula',password:'$2b$10$cUQvxtUKSSOqn4210caFHO.olGdUJvjN4PoE3teEe21lmfnVxcrQO', age:49, genre:'female'},
  ];
  
export function getUsers(){
    return users;
}

export function addUser(user){
    users.push(user);
    delete user.password;
    return user;
}

export function removeUser(id){
    const index = users.findIndex(u => u.id === id);
    const [user] = users.splice(index, 1);
    return user;
}

export function getUser(id){
    return users.find(u => u.id === id);

}

export function findUser(key, value){
    return users.find(u => u.key === value);

}

