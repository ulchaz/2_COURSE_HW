let obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}

for(let name in obj){
    alert(`${name} - зарплата ${obj[name]} долларов`)
}