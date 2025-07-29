let arr = [];

for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * 10);
    arr.push(random);
}
console.log(arr);

let evenNum = arr.filter(num => num % 2 == 0);

console.log(evenNum);

