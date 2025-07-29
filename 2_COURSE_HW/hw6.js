let array = [9, 8, 7, 6, 5];
let userNum = prompt('Введите число');

userNum = Number(userNum);

if (array.includes(userNum)) {
    alert('Угадал')
} else {
    alert('Не угадал')
}

