// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = () => {
  let counter = 5;
  return {
    increment: () => {
      ++counter;
      console.log(counter);
    },
    decrement: () => {
      --counter;
      console.log(counter);
    }
  }
}

let counterFunc = createCounter();

console.log(counterFunc.increment());
console.log(counterFunc.decrement());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
const body = document.body;

const findElementByClass = (mainEl, elClass) => {
  if(mainEl.classList.contains(elClass)) {
    return mainEl;
  }
  for(let i = 0; i <= mainEl.children.length; i++) {
    return (findElementByClass(mainEl.children[i], elClass))
  }
  return null;
}
const targetEl = findElementByClass(body, 'container__item');

console.log(targetEl);

// я не очень поняла последнее дз, поэтому не уверена..
