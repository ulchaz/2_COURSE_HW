let myDate = new Date();
myDate = +myDate;

let days73 = 73 * 24 * 60 * 60 * 1000;
let searchDate = myDate + days73;
let daysAfter73 = new Date(searchDate);

console.log(daysAfter73);