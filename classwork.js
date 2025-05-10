// const arr = [2, 4, 6];
// const result = arr.filter((el) => el * 2);
// console.log(result);
// // [2, 4, 6]


// const fruits = [];
// fruits.push("banana", "apple", "peach");
// console.log(fruits.length); // 3
// fruits[5] = "mango";

// console.log(fruits[5]); // 'mango'
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 6

// fruits.length = 10;
// console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 10
// console.log(fruits[8]); // undefined

// fruits.length = 2;
// console.log(Object.keys(fruits)); // ['0', '1']
// console.log(fruits.length); // 2



// -----------------------------------------------------------------------------------------
// const colors = ["red", "yellow", "blue"];
// colors[5] = "purple";
// colors.forEach((item, index) => {
//   console.log(`${index}: ${item}`);
// });
// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

// colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']

// const iterator = colors.keys();
// console.log(iterator);
// for (const key of iterator) {
//   console.log(`${key}: ${colors[key]}`);
// }
// Output
// 0: red
// 1: yellow
// 2: blue
// 3: undefined
// 4: undefined
// 5: purple

// const newColors = colors.toReversed(); // ['purple', undefined, undefined, 'blue', 'yellow', 'red']


// ----------------------------------------------------------------------

// const fruits = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];
// const start = 0;
// const deleteCount = 3;
// const removedItems = fruits.splice(start, deleteCount);
// console.log(fruits);
// // ["Banana", "Mango"]
// console.log(removedItems);
// // ["Apple", "Strawberry", "Cherry"]

// const fruits = ["Banana", "Mango"];
// const newLength = fruits.unshift("Strawberry");
// console.log(fruits);
// // ["Strawberry", "Banana", "Mango"]
// console.log(newLength);
// 3

// const fruits = ["Apple", "Banana", "Strawberry", "Mango"];
// const start = 1;
// const deleteCount = 2;
// const removedItems = fruits.splice(start, deleteCount);
// console.log(fruits);
// // ["Apple", "Mango"]
// console.log(removedItems);
// // ["Banana", "Strawberry"]




// --------------------------------------------------------------------------------------

// function calc(a, b, callback) {
//     const result = callback(a, b);
//     const string = "result";
//     const strUpper = string.toUpperCase();
//     return `${strUpper}:${result}`;
// }

// console.log(calc(3, 4, function (x, y) { return x + y; }));

// console.log(calc(3, 4, function (x, y) { return x - y; }));


// ---------------------------------------------------------------------------------------

// function each(array, callback) {
//     const newArray = [];
//     for (const item of array) {
//         newArray.push(callback(item));
//     }
//     return newArray;
// }

// console.log(each([1, 2, 3, 4,], function (value) { return value + 3; }));
// console.log(each([1, 2, 3, 4,], function (value) { return value / 3; }));
// console.log(each([1, 2, 3, 4,], function (value) { return Math.pow(value, 3); }));


// --------------------------------------------------------------------------------------

// function add(a, b, c) {
//     return a + b + c;
// };
// const lalala = (...args) => { return args; };
// const tototo = (...args) => args;
// const cicici = a => a;

// console.log(lalala(2, 4, 4, 5, 5));
// console.log(cicici(6));
// console.log(tototo(4, 4, 4, 4, 4));

// const foo = () =>{return { a: 6 }} ;

// console.log(foo());

// ---------------------------------------------------------------------------
// const calculation = (a, b, callback) => {
//     const result = callback(a, b);
//     console.log(result);
// }
// calculation(2, 2, (x, y) => x * y - 9);// -5
// calculation(2, 2, (x, y) => x + y);// 4

// ----------------------------------------------------------------------------
// const numbers = [20, 40, 60, 80, 90];
// numbers.forEach(function (number, index, array) {
//     console.log(number, index, array);
// 20 0 (5) [20, 40, 60, 80, 90]
// 40 1 (5) [20, 40, 60, 80, 90]
// 60 2 (5) 20, 40, 60, 80, 90]
// 80 3 (5) [20, 40, 60, 80, 90]
// 90 4 (5) [20, 40, 60, 80, 90]

// })

// numbers.forEach(function (number) {
//     console.log(number);
// }
// )

// let total = 0;
// numbers.forEach(function (number) {
//     total += number;
// }
// )
// console.log(total);

// const a= numbers.forEach((number) =>
//     total -= number
// )
// console.log(total);
// -----------------------------------------------------------------------------

// const allCars = [
//     { make: "Honda", model: "CR-V", amount: 12, type:"sedan", price: 24300, onSaile: true},
//     { make: "Honda", model: "Accord", amount: 13, type:"sedan", price: 32500, onSaile: false},
//     { make: "Mazda", model: "Mazda", amount: 15, type:"sedan", price: 25000, onSaile: false},
//     { make: "Mazda", model: "CX-9", amount: 3, type:"sedan", price: 26700, onSaile: true},
//     { make: "Toyota", model: "4Runner", amount: 3, type:"truck", price: 42000, onSaile: true},
//     { make: "Toyota", model: "Sequoia", amount: 5, type:"sedan", price: 40900, onSaile: false},
//     { make: "Ford", model: "Fusion", amount: 8, type:"sedan", price: 26800, onSaile: true},
//     { make: "Ford", model: "Explorer", amount: 14, type:"truck", price: 35000, onSaile: false},
// ]

// const getModels = (cars) => {
//     const arr = [];
//     cars.forEach(car => arr.push(car.model));
//     return arr;
// }
// console.log(getModels(allCars));
// console.table(getModels(allCars));

// const getModels = (cars) => {
//     const result = cars.map(car => car.model);
//     return result;
// }
// console.table(getModels(allCars));

// ----------------------------

// const makeCarsWithDiscount = (cars, discount) => {
//     return cars.map((car) => {
//         return { ...car, oldPrice: car.price, price: car.price * (1 - discount) };
//     });
// };
// console.table(makeCarsWithDiscount(allCars, 0.2));


// ------------------------------

// const filterByPrice = (cars, treshhold) => {
//     return cars.filter(car => car.price < treshhold)
// }
// console.log(filterByPrice(allCars,30000));

// -----------------------------

// const getCarsWithType = (cars, type) => {
//     return cars.filter(car => car.type === type)
// }
// console.log(getCarsWithType(allCars,"truck"));


// -----------------------------

// const getCarsOnSaile = (cars) => cars.filter(car => car.onSaile === true);

// const getCarsOnSaile = (cars) => cars
//     .filter(car => car.onSaile === true)
//     .map(car => car.model);
    
// console.table(getCarsOnSaile(allCars));


// ---------------------------------------------------------------------------------------

// const arr = [1, 2, 3, 3,[40, 50, 60, [400, 500,[6780]]]];

// console.log(arr.flat(Infinity));//(10) [1, 2, 3, 3, 40, 50, 60, 400, 500, 6780]


// ---------------------------------------------------------------------------------


// const arr = [10, 2, 30, 3, 7, 50, 20];

// const filtered = arr.filter(number => number > 10)
// console.log(filtered);


// const arr2 = arr
//     .filter(number => number > 3)
//     .map(number => number * 3)
//     .toSorted((a, b) => a - b);
// console.log(arr2);


// // ---------------------------------------------------------------------------------------

// function foo() {
//     console.log(this);
// }
// foo(); // window

// // -----------------------

// "use strict"

// function foo() {
//     console.log(this);
// }
// foo(); // undefined

// // --------------------------

// const user= {
//     name: "Alice",
//     showThis() {
//          console.log(this);
// }
// }
// user.showThis(); // {name: 'Alice', showThis: ƒ}

// // ------------------------

// const user= {
//     name: "Alice",
//     showThis() {
//          console.log(this.name);
// }
// }
// user.showThis(); // Alice


// ------------------------

// const user= {
//     name: "Alice",
//     foo: () => {
//          console.log(this);
// }
// }
// user.foo(); // window

// ------------------------

// const user = {
//     name: "Alice",
//     showThis() {
//         console.log("showThis", this); // {name: 'Alice', showThis: ƒ}

//         const foo = () => {
//             console.log("foo", this);
//         }
//         foo();  // foo {name: 'Alice', showThis: ƒ}
//     },
// }

// user.showThis();

// ------------------------

// function foo(){
//     console.log("foo", this);
// }

// const user = {
//     name:"Petya",
// }

// user.showThis = foo;

// console.log(user); // {name: 'Petya', showThis: ƒ}
// user.showThis();// foo {name: 'Petya', showThis: ƒ}

// -------------------------

// const user= {
//     name: "Alice",
//     showThis() {
//         console.log(this);
// }
// }
// user.showThis(); // {name: 'Alice', showThis: ƒ}

// ------------------

// ??????????????????????????????????????????????????????????????????

// "use stict"

// const user= {
//     name: "Alice",
//     showThis() {
//         console.log(this);
// }
// }
// const foo= user.showThis;
// foo();// window ?????????????????????????????????????????????????




// -----------------------------------------------------------------------------------------------

// const chopShop = {
//     stones: [
//         { name: "Emerald", price: 3340, quantity: 12 },
//         { name: "Diamond", price: 5087, quantity: 24 },
//         { name: "Sapphire", price: 2034, quantity: 5 },
//         { name: "Ruby", price: 2340, quantity: 11 },
//     ],

//     calculateTotalPrice(stoneName) {
//         const stone = this.stones.find(item => item.name === stoneName);

//         if (!stone) {
//             return `${stoneName} not found`
//         }
//         return stone.price * stone.quantity;
//     }
// }

// console.log(chopShop.calculateTotalPrice("Sapphire"));
   



// ------------------------------------------------------------------------------------------

// function foo(){
//     console.log("foo", this);
// }

// const objA = {
//     a: 4,
//     b: 5,
// }

// foo.call(objA); // foo {a: 4, b: 5}

// ------------------------------------------

// function foo(a,b,c) {
//     console.log("a", "b", a, b);
//     console.log("foo", this);
// }

// const objB = {
//     a: 40,
//     b: 50,
// }

// // foo.call(objB); // a b undefined undefined    foo {a: 40, b: 50}
// foo.call(objB,"lalala",[1,2,3],0); //a b lalala (3) [1, 2, 3]     foo {a: 40, b: 50}


// ---------------------------------------------------------------------------------------

// function changeColor(color) {
//     console.log("changeColor", this);
//     this.color = color;
// }

// const hat = {
//     color: "black",
// }

// const sweater = {
//     color: "blue",
// }

// changeColor.call(hat, "red");
// console.log(hat);  //changeColor {color: 'black'} //{color: 'red'}

// changeColor.apply(sweater, ["yellow"]);
// console.log(sweater); //changeColor {color: 'blue'} // {color: 'yellow'}


// const changeHatColor = changeColor.bind(hat, "green");
// changeHatColor();
// console.log(hat); //changeColor {color: 'red'}  {color: 'green'}

// const changeSweaterColor = changeColor.bind(sweater);
// changeSweaterColor("purple");
// console.log(sweater); //changeColor {color: 'yellow'}  {color: 'purple'}
// // ---------------------------------------------------------------------------------


// const counter = {
//     value: 0,
//     increment(num) {
//         console.log("increment", this);
//         this.value += num;
//     },
//      decrement(num) {
//         console.log("decrement", this);
//         this.value -= num;
//     },
// }

// function foo(number, callback) {
//     console.log(callback);//ƒ increment(num){console.log("increment", this); this.value += num;}
//     callback(number);
// }
// foo(100, (number) => console.log(number + 5)); //105

// foo(10, counter.increment);
// console.log(counter);//increment Window {value: 0, increment: ƒ, decrement: ƒ}

// foo(10, counter.increment.bind(counter));
// console.log(counter);//increment {value: 0, increment: ƒ, decrement: ƒ} {value: 10, increment: ƒ, decrement: ƒ}

// foo(5, counter.decrement.bind(counter));
// console.log(counter);//decrement {value: 10, increment: ƒ, decrement: ƒ} {value: 5, increment: ƒ, decrement: ƒ}



//-----------------------------------------------------------------------------------------------------------------

// const objC = { c: "objC" }

// const objB = Object.create(objC);
// objB.b = "objB";

// const objA = Object.create(objB);
// objA.a = "objA";

// console.log(objA); //{a: 'objA'}
// console.log(objA.c); //objC
// console.log(objB.a); //undefined

//---------------------------------------------------------------------------------------------

// const cruiseControle = {
//     speed: 0,
//     brand: "BMW",
//     accelerate() {
//         console.log(this);//{speed: 0, brand: 'BMW', accelerate: ƒ, decrease: ƒ}
//         this.speed += 10;
//         console.log(`Автомобіль ${this.brand} прискорюється. Швидкість ${this.speed}`);
//     },
//     decrease() {
//         if (this.speed <= 0) {
//             console.log("Авто зупинилося");
//             return;
//         }
//         this.speed -= 5;
//          console.log(`Автомобіль ${this.brand} гальмує. Швидкість ${this.speed}`);
//     },
// }
// cruiseControle.accelerate();
// cruiseControle.decrease();
// cruiseControle.decrease();
// cruiseControle.decrease();
// console.log(cruiseControle);

//-----------------------------------------------------------------------------------------------

// const SPEED = 60;

// const bmw = {
//     brand: "BMW",
//     speed: 40,
// }

// const audi= {
//     brand: "AUDI",
//     speed: 70,
// }

// // function speedSensor (maxSpeed){
// //     console.log(this);//{brand: 'BMW', speed: 40}
// //     if (this.speed <= maxSpeed) {
// //         return `Автомобіль ${this.brand} рухається з безпечною швидкістю`
// //     }
// //     return `Автомобіль ${this.brand} перевищує швидкість`;
    
// // }

// function speedSensor(maxSpeed) {
//     return this.speed <= maxSpeed ?
//         `Автомобіль ${this.brand} рухається з безпечною швидкістю`
//         : `Автомобіль ${this.brand} перевищує швидкість`;
// }

// console.log(speedSensor.call(bmw, SPEED));//Автомобіль BMW рухається з безпечною швидкістю
// console.log(speedSensor.apply(audi, [SPEED]));



//-------------------------------------------------------------------------------------------------


// const object = {
//     message: 'Hello, World',
//     getMessage() {
//         const message = 'Hello, Earth';
//         return this.message;
//     },
// };
// console.log(object.getMessage());//Hello, World

//---------------------------------------------------------------------


// class Car {

//     #price;

//     constructor(obj) {
//         this.brand = obj.brand;
//         this.model = obj.model;
//         this.#price = obj.price;
//     }

//     getModel() {
//         return this.model;
//     }

//     changeModel(newModel) {
//         this.model = newModel;
//     }

//     getPrice() {
//         return this.#price;
//     }

//     changePrice(newPrice) {
//         this.#price = newPrice;
//     }

// }

// const bmw = new Car ({
//     brand: "bmw",
//     model: "x5",
//     price: 50000,
// }
// )

// console.log("bmw", bmw); //bmw Car brand: "bmw" model: "x5" price: 50000 [[Prototype]]: Object

// console.log(bmw.getModel()); //x5

// bmw.changeModel("x3");
// console.log(bmw.getModel());//x3

// console.log(bmw.model);//x3
// console.log(bmw.price);//undefined


// console.log(bmw.getPrice());//50000
// bmw.changePrice(70000);
// console.log(bmw.getPrice());//70000

//-------------------------------------------------------------

// class Car {

//     static qty = 0;

//     static increment() {
//         Car.qty += 1;
//     }

//     #price;

//     constructor(obj) {
//         this.brand = obj.brand;
//         this.model = obj.model;
//         this.#price = obj.price;
//         Car.increment();
//     }

//     get price() {
//         return this.#price;
//     }

//     // set price(newPrice) {
//     //     if (typeof newPrice !== "number") {
//     //         consolele.log("Invalide price");
//     //         return;
//     //     }
//     //     this.#price = newPrice;
//     // }

//     set price(newPrice) {
//         if(this.#checkType(newPrice, "number")) {
//            this.#price = newPrice;
//             return;
//         }
//         console.log("Invalide price");
//     }

//     #checkType(data, type) {
//         if(typeof data === type) {
//             return true;
//         }            
//         return false;
//     }
// }

// const bmw = new Car ({
//     brand: "bmw",
//     model: "x5",
//     price: 50000,
// }
// )

// console.log(bmw.model);//x5
// console.log(bmw.price);//50000

// bmw.price = 70000;

// console.log(bmw.price);//70000

// bmw.price = "555555"; //Invalide price

// console.log(bmw.price);//70000

// console.log(Car.qty);//1
// console.log(Car.increment());//undefined
// console.log(Car.increment);//ƒ increment() {Car.qty += 1;}

// console.log(Car.qty);//2


//-------------------------------------------------------------------














