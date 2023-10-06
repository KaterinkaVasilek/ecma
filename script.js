// Задание 1: ""Управление библиотекой книг""
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo = function() {
    console.log(`${this.title}, ${this.author}, ${this.pages}`);
  }
}

const book_1 = new Book('Harry Potter', 'J.K. Rowling', 375);
book_1.displayInfo();

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  displayInfo = function() {
    console.log(`${this.name}, ${this.age}, ${this.grade}`);
  }
}

const student_1 = new Student('Ivan Ivanov', 16, '1A');
student_1.displayInfo();

const student_2 = new Student('Olga Petrova', 15, '1B');
student_2.displayInfo();