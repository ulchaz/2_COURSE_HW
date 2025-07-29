let askAge = () => {
    let userAge = prompt('Введите ваш возраст');
    if (userAge > 0 && userAge <= 12) {
        alert('Привет, друг!')       
    } else if (userAge >= 13){
        alert('Добро пожаловать!')
    } else{
        alert('Вы ввели неправильное значение')
    }
}

askAge();