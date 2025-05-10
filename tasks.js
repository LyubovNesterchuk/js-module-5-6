// -------------------------------------------------------------------------------1


// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]

// const powNumbers = numbers.map(number => Math.pow(number,2));

// console.log(powNumbers);


// const powNumbers = (array) => array.map(number => Math.pow(number,2));

// console.log(powNumbers(numbers));






// -------------------------------------------------------------------------------2

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];
// const newArray = data.flatMap(item => item.values);

// console.log(newArray);



// const newArray = arr => arr.flatMap(item => item.values);

// console.log(newArray(data));




// -------------------------------------------------------------------------------3

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const isSomeYounger =  people.some(person => person.age < 20);

// console.log(isSomeYounger);


// const isSomeYounger = (arr) => arr.some(person => person.age < 20);

// console.log(isSomeYounger(people));


// --------------------------------------------------------------------------------4
// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.


// const numbers = [2, 4, 6, 8, 10];

// const isEveryEvenNumber = numbers.every(number => number % 2 === 0);

// console.log(isEveryEvenNumber);



// const isEveryEvenNumber = (arr) => arr.every(number => number % 2 === 0);

// console.log(isEveryEvenNumber(numbers));






// ---------------------------------------------------------------------------------5

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];


// const findAddNumber = numbers.find(number =>  number % 2 !== 0);
 
// console.log(findAddNumber);


// const findAddNumber = (arr) => arr.find(number =>  number % 2 !== 0);
 
// console.log(findAddNumber(numbers));




// --------------------------------------------------------------------------------6

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const sortToAscOrder = numbersArray.toSorted((a, b) => a - b);

// console.log(sortToAscOrder);


// const sortToAscOrder = (arr) => arr.toSorted((a, b) => a - b);

// console.log(sortToAscOrder(numbersArray));


// ----------------------------------------------------------------------------------7

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].


// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const sortToAscendingOrder = stringArray.toSorted((a, b) => a.localeCompare(b));

// console.log(sortToAscendingOrder);



// const sortToAscendingOrder = (arr) => arr.toSorted((a, b) => a.localeCompare(b));

// console.log(sortToAscendingOrder(stringArray));




// -----------------------------------------------------------------------------------8
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];


// const sortToAscendingOrder = users.toSorted((a, b) => a.age - b.age);

// console.log(sortToAscendingOrder);






// const sortToAscendingOrder = (arr) => arr.toSorted((a, b) => a.age - b.age);

// console.log(sortToAscendingOrder(users));






// ----------------------------------------------------------------------------------9
// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]


// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// const filterArray = users.filter(user => user.age > 20);

// console.log(filterArray);



// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// const filterArray = (arr) => arr.filter(user => user.age > 20);

// console.log(filterArray(users));



// ---------------------------------------------------------------------------------------10

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.


// const numbers = [1, 2, 3, 4, 5];


// const sumArray = numbers.reduce((sum, number) => sum += number, 0);


// console.log(sumArray);





// ---------------------------------------------------------------------------------------11

 // Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод substruct - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 

class Calculator {
  constructor() {
    this.value = 0;
  }

  number(value) {
    this.value = value;
    return this; 
  }

  getResult() {
    return this.value;
  }

  add(value) {
    this.value += value;
    return this;
  }

  substruct(value) {
    this.value -= value;
    return this; 
  }

  divide(value) {
    if (value === 0) {
      console.log("Не можна ділити на 0");
      return this;
    }
    this.value /= value;
    return this; 
  }

  multiply(value) {
    this.value *= value;
    return this; 
  }
}

const calculator = new Calculator();
const result = calculator.number(10)
                         .add(5)
                         .substruct(3)
                         .multiply(2)
                         .divide(4)
                         .getResult();

console.log(result); // 6

const result2 = calculator.number(10)
                         .add(5)
                         .substruct(3)
                         .multiply(2)
                         .divide(0)
                         .getResult();

console.log(result2);//Не можна ділити на 0 

const newItem = new Calculator();
console.log(newItem.number(10).add(5).substruct(3).getResult());


// ---------------------------------------------------------------------------------12

 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email
 
// class Client {
//     #login;
//     #email;

//     constructor(params) {
//         this.#login = params.login;
//         this.#email = params.email;
//     }

//     get login() {
//         return this.#login;
//     }

//      set login(newLogin) {
//          this.#login = newLogin;;
//     }
    
//     get email() {
//         return this.#email;
//     }    

//      set email(newEmail) {
//          this.#email = newEmail;
//     }
// }
 






//  const client = new Client({ login: "ivan123", email: "ivan@example.com" });

// console.log(client.login); // "ivan123"
// console.log(client.email); // "ivan@example.com"

// client.login = "peter456";
// client.email = "peter@example.com";

// console.log(client.login); // "peter456"
// console.log(client.email); // "peter@example.com"

 
//  --------------------------------------------------------------------------------13

  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// class Person {

//     constructor(params) {
//         this.name = params.name;
//         this.age = params.age;
//         this.gender = params.gender;
//         this.email = params.email;
//     }
    
//     getDetails() {
//         return {
//             name: this.name,
//             age: this.age,
//             gender: this.gender,
//             email: this.email,
//         };
//     }
// }
    
// class Employee extends Person {

//     constructor(params) {
//         super(params);
//         this.salary = params.salary;
//         this.department = params.department;
//     }

//     getEmployeeDetails() {
//         return {
//             salary: this.salary,
//             department: this.department,
//         };
//     }
// }


// const employee = new Employee({
//     name: 'John Doe',
//     age: 30,
//     gender: 'Male',
//     email: 'john.doe@example.com',
//     salary: 5000,
//     department: 'IT'
// });


// console.log(employee.getDetails());//  { name: 'John Doe', age: 30, gender: 'Male', email: 'john.doe@example.com' }

// console.log(employee.getEmployeeDetails()); // { salary: 5000, department: 'IT' }
