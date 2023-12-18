// class Circle {
//     constructor(radius, color) {
//         this.radius = radius;
//         this.color = color;
//     }

//     Circle = function () {

//     }
//     getRadius = function() {
//         return this.radius;
//     }
//     getArea = function() {
//         let area = Math.PI * this.radius * this.radius;
//         return area;
//     }
// }

// let circle = new Circle(25, "Red");
// console.log(` Bán kính hình tròn là ${circle.getRadius()}. Diện tích hình tròn là ${circle.getArea()}`);

class MyDate {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    MyDate = function () {

    }
    getDay = function() {
        return this.day;
    }
    getMonth = function() {
        return this.month;
    }
    getYear = function() {
        return this.year;
    }
    setDay = function(day) {
        this.day = day;
    }
    setMonth = function (month) {
        this.month = month;
    }
    setYear = function (year) {
        this.year = year;
    }
    toString = function() {
        return `${day}/${month}/${year}`
    }    
};

let date = new MyDate(2, 2, 2007);

// date.setDay(10);
// date.setMonth(10);
// date.setYear(2019);

let day = date.getDay();

let month = date.getMonth(); 

let year = date.getYear(); 

// alert(day + "/" + month + "/" + year);

alert(date.toString());


