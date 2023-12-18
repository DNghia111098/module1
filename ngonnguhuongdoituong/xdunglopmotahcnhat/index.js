class Rectangle {
    constructor(lenght, width) {
        this.lenght = lenght;
        this.width = width;
    }
    Rectangle = function() {

    }
    getLenght = function() {
        return this.lenght;
    }
    getWidth = function() {
        return this.width;
    }
    getArea = function() {
        let area = this.lenght * this.width;
        return area;
    }
    getPerimeter = function() {
        let perimeter = (this.lenght + this.width) * 2;
        return perimeter
    }
};
let rectangle = new Rectangle(5,10);
let lenght = rectangle.getLenght();
let width = rectangle.getWidth();
let area = rectangle.getArea();
let perimeter = rectangle.getPerimeter();

alert(`Dien tich la ${rectangle.getArea()}. Chu vi la ${rectangle.getPerimeter()}`);


