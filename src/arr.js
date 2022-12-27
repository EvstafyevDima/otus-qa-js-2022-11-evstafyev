// Создание массива
const numbers = [100, 200, 300] 

// Массив объектов
const objArray = [{ name: 'Nik' }, { name: 'Anna' }]

// Длина массива
console.log('Длина массива:', numbers.length)
console.log('Длина массива:', objArray.length)

// Чтение первого элемента
console.log('Первый элемент:', numbers[0])
console.log('Первый элемент:', objArray[0])

// Чтение последнего элемента
console.log('Последний элемент:', numbers[numbers.length - 1])
console.log('Последний элемент:', objArray[objArray.length - 1])

// несуществующий эелемент
console.log('Несуществующий элемент:', numbers[100500])
console.log('Несуществующий элемент:', objArray[-1])

// Перезаписать 2 элемент
numbers[1] = 999
objArray[1] = { name: 'Алла' }

// Чтение первого элемента
console.log('Первый элемент:', numbers[1])
console.log('Первый элемент:', objArray[1])


// Добавить элемент в массив
numbers.push(4000) // push добавляет элемент в конец массива
objArray.push({ name: 'Mike' }) // push добавляет элемент в конец массива

// Добавить элемент в массив
console.log('массив:', numbers)
console.log('массив:', objArray)

//Способы перебора массива
// Первый способ
for (let i = 0; i < numbers.length; i++) {
    console.log('Индекс:', i, 'Значение:', numbers[i])
  }

// Второй способ
for (const value of numbers) {
    console.log('Значение:', value)
  }

  
// Третий способ
numbers.forEach((value, index) => {
    console.log('Индекс:', index, 'Значение:', value)
  })