// Задание 1: ""Управление персоналом компании""
// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс wq  d23Q2ZXX X XX, который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
// // Пример использования классов
// const employee = new Employee(""John Smith"");
// employee.displayInfo();

// Вывод:
// Name: John Smith

// const manager = new Manager(""Jane Doe"", ""Sales"");
// manager.displayInfo();

// Вывод:
// Name: Jane Doe
// Department: Sales

class Employee {
  constructor(name) {
    this.name = name;
  }

  displayInfo() {
    console.log(this.name);
  }
}

const employee_1 = new Employee('Lisa Garner');
employee_1.displayInfo();

class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }

  displayInfo() {
    console.log(this.name, this.department)
  }
}

const manager_1 = new Manager('Mark Baum', 'advertising');
manager_1.displayInfo();

// Задание 2: ""Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// // Пример использования класса
// class Product {
// constructor(name, price) {
// this.name = name;
// this.price = price;
// }
// }

// const order = new Order(12345);

// const product1 = new Product(""Phone"", 500);
// order.addProduct(product1);

// const product2 = new Product(""Headphones"", 100);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 600

class Product {
  constructor(name, price) {
  this.name = name;
  this.price = price;
  }
}

class Order {
  constructor(orderNumber) {
    this.orderNumber = orderNumber;
  }

  products = [];

  addProduct(product) {
    this.products.push(product)
  }

  getTotalPrice() {
    if(this.products.length == 0) {
      return;
    } else {
      let result = 0;
      this.products.forEach(item => {
        result += item.price;
      })
      return result;
    }
  }
}

const order = new Order(125);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice());
console.log(order);

const order2 = new Order(789);

const product3 = new Product("Laptop", 50000);
order2.addProduct(product3);

const product4 = new Product("Smartphone", 1000);
order2.addProduct(product4);

console.log(order2.getTotalPrice());
console.log(order2);