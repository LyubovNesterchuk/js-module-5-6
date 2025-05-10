// class Animal {
//     constructor(type, name) {
//         this.type = type;
//         this.name = name;
//     }
//     getInfo() {
//         return `Animal type: ${this.type}, animal name: ${this.name}.`
//     }
// }

// class Reptilies extends Animal {
//     constructor(type, name, food) {
//         super(type, name);
//         this.food = food;
//     }
//     feeding() {
//         return `${this.name} eats ${this.food}`
//     }
// }

// class Birds extends Animal {
//     constructor(type, name, food) {
//         super(type, name);
//         this.food = food;
//     }
//     feeding() {
//         return `${this.name} eats ${this.food}`
//     }
// }

// const crocodile = new Reptilies("aligator", "Bob", "meat");
// console.log(crocodile);
// console.log(crocodile.getInfo());
// console.log(crocodile.feeding());

// const parrot = new Birds("ara", "Polly", "grain");
// console.log(parrot);
// console.log(parrot.getInfo());
// console.log(parrot.feeding());

// class Zoo {
//     constructor() {
//         this.animals = [];
//     }

//     addAnimal(animal) {
//         this.animals.push(animal);
//     }

//     removeAnimal(name) {
//         this.animals = this.animals.filter((animal) => animal.name !== name);
//     }

//     showInfo() {
//         this.animals.forEach((animal) =>
//             console.log(`${animal.type}, ${animal.name},  ${animal.food}`))
//     }
// }

// const zoo = new Zoo;
// zoo.addAnimal(crocodile);
// zoo.addAnimal(parrot);
// zoo.showInfo();
// zoo.removeAnimal("Bob");
// zoo.showInfo();
// console.log(zoo.animals);


// console.log(typeof Zoo); //function

//-------------------------------------------------------------------------------

// const product = {
//     price: 5000,
//     showPrice() {
//         console.log(this.price);
//     },
// };

// product.showPrice();//5000

// function callAction(action) {
//     action();
// }

// console.log(product.showPrice.bind(product));//ƒ showPrice() {console.log(this.price);}

// callAction(product.showPrice.bind(product));//5000

// const product2 = {
//     price: 2000,
// };

// const show = product.showPrice.bind(product2);

// show();//2000

//---------------------------------------------------------------------------------------

// const fruits = ["banana", "apple", "banana", "apple", "plum", "pear", "orange", "apple"];
 

// const totalLength = fruits.reduce((acc, item) => acc + item.length, 0);
// console.log(totalLength);//41


// const totalStr = fruits.reduce((acc, item) => acc + item, "");
// console.log(totalStr);//bananaapplebananaappleplumpearorangeapple


// const total = fruits.reduce((acc, item) => {
//     if (acc[item] === undefined) {
//         acc[item] = 1;
//     } else {
//         acc[item] += 1;
//     }
//     return acc;
// }, {}
// );

// console.log(total);//{banana: 2, apple: 3, plum: 1, pear: 1, orange: 1}



// const newFn = (acc, item) => {
//     if (acc[item] === undefined) {
//         acc[item] = 1;
//     } else {
//         acc[item] += 1;
//     }
//     return acc;
// };
// const total2 = fruits.reduce(newFn, {});

// console.log(total2);//{banana: 2, apple: 3, plum: 1, pear: 1, orange: 1}


//----------------------------------------------------------------------------------------

// function letMeSeeYourName(callback) {
//     const userMessage = prompt("Name");
//     if (!userMessage) {
//         return;
//     }
//     return callback(userMessage);
// }

// function greet(name) {
//     return `Привіт ${name}!`;
// }
// console.log(letMeSeeYourName(greet));

//-----------------------------------------------------------------------------

// const object = {
//     message: 'Hello, World',
//     getMessage() {
//       const message = 'Hello, Earth';
//       return this.message;
//     },
//   };
//   console.log(object.getMessage());//Hello, World

//-----------------------------------------------------------------------------------


// const person = { name: 'Mango' };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 18));//Mango is 18
// console.log(sayHi.bind(person, 18));//ƒ sayHi(age) {return `${this.name} is ${age}`;}

//--------------------------------------------------------------------------------

// class Animal {
//     speak() {
//       console.log('Animal speaks');
//     }
//   }
  
//   class Dog extends Animal {
//     speak() {
//       super.speak(); // виклик методу батьківського класу
//       console.log('Dog barks');
//     }
//   }

//-----------------------------------------------------------------------------------------




