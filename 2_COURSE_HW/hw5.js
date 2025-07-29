let checkNum = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом'
    } else {
        return a * b;
    }
}

console.log(checkNum(1, 'd'));
console.log(checkNum(2, 4))