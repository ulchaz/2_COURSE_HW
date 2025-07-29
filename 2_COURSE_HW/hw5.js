const circle1 = {
    radius : 10,
    getArea(){
        return (3,14 * this.radius ** 2)
    },
    getPerimeter(){
        return 6,28 * this.radius
    }
}

const circle2 = {
    radius : 4,
    getArea(){
        return (3,14 * this.radius ** 2)
    },
    getPerimeter(){
        return 6,28 * this.radius
    }
}

console.log(`Площадь круга 1 равна ${circle1.getArea()}`)
console.log(`Периметр круга 1 равен ${circle1.getPerimeter()}`)

console.log(`Площадь круга 2 равна ${circle2.getArea()}`)
console.log(`Периметр круга 2 равен ${circle2.getPerimeter()}`)
