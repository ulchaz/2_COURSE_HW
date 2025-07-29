let array = [9, 8, 7, 'a', 6, 5];

array = array.sort();
const result = array.filter(item => item != 'a');

console.log(result);
