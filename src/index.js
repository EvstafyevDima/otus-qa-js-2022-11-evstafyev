console.log('Hello OTUS!')

// У объекта есть свойства
// У массива - это числовые индексы

const user = {
    name: 'Nik',
    surname: 'Lapshin',
    age: 33
  };

  // for in - для объектов
  for (const key in user) {
    console.log('Ключ:', key, 'Значение:', user[key])
  }

  // Как получить массив ключей объекта?
console.log(Object.keys(user)) // [ 'name', 'surname', 'age' ]

// Как получить массив значений объекта?
console.log(Object.values(user)) // [ 'Nik', 'Lapshin', 33 ]

// Как получить массив пар ключ-значение объекта?
console.log(Object.entries(user)) // [ [ 'name', 'Nik' ], [ 'surname', 'Lapshin' ], [ 'age', 33 ] ]

const arr = [1, 2, 3];
arr.pop()
console.log(arr) // [ 1, 2 ] удаляем элемент из конца массива.

arr.unshift(-100) // [ -100, 1, 2 ] добавим в начало массива
console.log(arr)

arr.shift() // [ 1, 2 ] удалим элемент в начала массива
console.log(arr)

const arrr = [1, 2, 3];
const newArrr = arrr.map(value => {
  return value * 2
}) // Массив из новых элементов, каждый из которых умножен на два.
console.log(newArrr) // [ 2, 4, 6 ]

// Хотим оставить все возвраста от 18 до 100
const ages = [10, 50, 100500, 20, 30]
const newAges = ages.filter((age => {
  return age > 18 && age < 100
}))
console.log(newAges) // [ 50, 20, 30 ]

const money = [100, 50, 70]
const sum = money.reduce((res, value) => {
  // В самом начале res = 0;
  // После первого прохода будет 100;
  // После второго прохода будет 150;
  res = res + value;
  return res;
}, 0) // результат 220
console.log(sum)

const arrNumbers = [5, 2, 7, 8]
arrNumbers.sort((a, b) => a - b); // Либо больше 0, либо меньше, либо равно нулю
console.log(arrNumbers)

