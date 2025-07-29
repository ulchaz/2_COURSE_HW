let checkNum = () => {
    let userNum = prompt('Введите число')

    if (isNaN(userNum)) {
        return 'Переданный параметр не является числом'
    } else {
        let cubedUserNum = userNum * userNum * userNum;
        return `${userNum} в кубе равняется ${cubedUserNum}`
    }
}

let result = checkNum();

console.log(result)
