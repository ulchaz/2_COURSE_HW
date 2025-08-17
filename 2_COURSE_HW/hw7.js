function generateRandomArray (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min; 
}
const result = generateRandomArray(10, 20);
console.log(result);

