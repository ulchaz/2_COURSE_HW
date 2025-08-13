let arr = [];

for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 10);
    arr.push(random);
}
console.log(arr);

let sum = arr.reduce((acc, value) => 
    (acc + value));
let result = sum / arr.length;
console.log(result);

function findWeekdayAndWeekendNextMonth(){
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const firstDayNextMonth = new Date(year, month, 1);
    const dayInNextMonth = new Date(year, month + 1, 0).getDate();

    let weekday, weekend;
    let foundWeekday = false;
    let foundWeekend = false;
    
}