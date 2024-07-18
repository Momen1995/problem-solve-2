import { circleArea } from "./fun.js";

//problem 1
const person = {
  names: "Sohel hasan",
  age: 35,
};

const { names, age } = person;
console.log(names, age);

//problem 2
const radius = 5;
const area = circleArea(radius);
console.log(`The area of the circle with radius ${radius} is ${area}`);

//problem 3
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculate() {
    console.log(this.width * this.height);
  }
}

const result = new Rectangle(10, 10);
result.calculate(10, 10);

//problem 5
const Circle = class {
  constructor(radius) {
    this.radius = radius;
  }

  calculate() {
    console.log(2 * Math.PI * this.radius);
  }
};

const circleResult = new Circle(10);
circleResult.calculate();

//problem 6
const propertyName = "fullName";

const obj = {
  [propertyName]: "Alim hasan",
  age: 23,
};
console.log(obj);

//problem 7
class Animal {
  constructor(age, color) {
    this.age = age;
    this.color = color;
  }

  detail() {
    return this.age + " " + this.color;
  }
}

class Dog extends Animal {
  constructor(names, age, color) {
    super(age, color);
    this.names = names;
  }

  dogDetail() {
    return this.names + " " + this.detail();
  }
}

const dog = new Dog("Dog", 12, "black");
console.log(dog);
console.log(dog.dogDetail());

//problem 8
class Shape {
  constructor() {
    if (!new.target) {
      throw "Must use new keyword with shape class name";
    }
  }

  getArea() {
    alert("get area method create in sub class.");
  }
}

class CircleOne extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const circleResultTwo = new CircleOne(10);
console.log(circleResultTwo.getArea());

const shapeResult = new Shape();
console.log(shapeResult.getArea());

//problem 9
class MathUtil {
  static square(num) {
    return num ** 2;
  }
}

const num1 = MathUtil.square(10);
console.log(num1);

// //problem 10
const symbolOne = Symbol("first");
const symbolTwo = Symbol("last");

const newObj = {
  [symbolOne]: "Bangladesh is a beautiful country",
  [symbolTwo]: "Bangladesh",
};

console.log(newObj);

//demonstrate accessing it.
console.log(newObj[symbolOne]);
console.log(newObj[symbolTwo]);
