function gamePuzzle() {
    const puzzle = 'Что может путешествовать по свету, оставаясь в одном и том же углу?'
    const answer = 'марка';

    let userAnswer = prompt(puzzle);

    if (userAnswer.toLowerCase() === answer) {
        alert('Поздравляю! Вы отгадали загадку!')
    } else {
        const hint1 = 'Это что-то маленькое, что можно наклеить.';
        userAnswer = prompt(hint1);
        if (userAnswer.toLowerCase() === answer) {
            alert('Поздравляю! Вы отгадали загадку!')
    } else {
        const hint2 = 'Это используется для отправки писем.';
        userAnswer = prompt(hint2);
        if (userAnswer.toLowerCase() === answer) {
            alert('Поздравляю! Вы отгадали загадку!')
        } else {
            alert("К сожалению, вы не отгадали загадку.\nПравильный ответ: " + answer);
        }
    }
    }

}