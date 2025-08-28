function gameWord() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruits = fruits.sort(() => Math.random() - 0.5);
    window.alert(fruits.join(', '));

    let answerFirst = prompt('Введите первый фрукт из списка');
    let answerLast = prompt('Введите последний фрукт из списка');

    if (answerFirst.toLowerCase() === fruits[0].toLowerCase() && answerLast.toLowerCase() === fruits[fruits.length - 1].toLowerCase()){
        alert('Вы победили!');
    } else if (answerFirst.toLowerCase() != fruits[0].toLowerCase() && answerLast.toLowerCase() != fruits[fruits.length - 1].toLowerCase()) {
        alert('Вы не угадали. Повторить?');
    } else {
        alert('Так близко!')
    }
}

