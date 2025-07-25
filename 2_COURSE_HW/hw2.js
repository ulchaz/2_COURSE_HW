let  user = {
    name: 'Юлия',
    age: 21,
    isAdmin: false
};
console.log(user)

user.sityOfResidense = 'Москва';
console.log(user);

user.age = 22;
console.log(user);

delete user.sityOfResidense
console.log(user);

let info = prompt('Какую информацию хотите узнать о пользователе?')
alert(user[info])