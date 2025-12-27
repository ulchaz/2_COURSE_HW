function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
   setTimeout(callback, 1000)
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})