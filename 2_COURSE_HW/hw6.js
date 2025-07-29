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

