//Khởi tạo đối tượng
// let chair = {
//     firrstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
// };

// //khởi tạo lớp c1
// function person(firstName, lastName, age, eyeColor) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.eyeColor = eyeColor;
//     this.changeName = function (name) {
//         this.lastName = name;
//     };
// }

// //khởi tạo lớp c2
// class Person {
//     //hàm tạo
//     constructor(firstName, lastName, age, eyeColor) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.eyeColor = eyeColor;
//     }

//     changeName = function (name) {
//         this.lastName = name;
//     };
//     setFirstName(firrstName) {
//         this.firstName = firrstName;
//     }
//     getFirstName() {
//         return this.firstName;
//     }
// }

// //Tạo đối tượng
// let myFather = new Person("John", "Doe", 50, "blue");
// myFather.setFirstName("David");
// console.log(myFather.getFirstName());

// // let myMother = new Person("Sally", "Rally", 48, "green")

// khởi tạo sử dụng lớp Hình tròn

class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    Circle = function () {

    }
    getRadius = function() {
        return this.radius;
    }
    getArea = function() {
        let area = Math.PI * this.radius * this.radius;
        return area;
    }
}

let circle = new Circle(25, "Red");
console.log(` Bán kính hình tròn là ${circle.getRadius()}. Diện tích hình tròn là ${circle.getArea()}`);    