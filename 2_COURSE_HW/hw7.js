function generateRandomArray (n) {
    const length = Math.floor(n / 2);
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * n);
        randomArray.push(randomNumber)
    }  
    return randomArray;      
}
const result = generateRandomArray(16);
console.log(result);

