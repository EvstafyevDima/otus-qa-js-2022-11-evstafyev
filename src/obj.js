
const obj = {}

// Создание объекта
const car = {
    name: 'Audi', // name - это ключ(или свойства), 'Audi' - это значение
    model: 'A3' // model - это ключ(или свойства), 'A3' - это значение
  }

  console.log('Car name:', car.name)

  console.log('Car name:', car['model']) 

  car.color = 'red'
  car['year'] = 2022

  console.log(car)


  const user = {
    name: 'Nik',
    surname: 'surname',
    age: 33,
  };
  const userInfo = getUserInfo(user);
  console.log('userInfo', userInfo);
  function getUserInfo(user) {
    return `Имя: ${user.name}. Фамилия: ${user.surname}. Возраст: ${user.age}.`
  }


  const user1 = {
    name: 'Nik',
    surname: 'surname',
    age: 33,
    // snowInfo - это метод объекта(ключ - showInfo, значение - функция)
    showInfo() {
      // this - это ключевое слово, которое ссылается на переменную user
      console.log(`Имя: ${this.name}. Фамилия: ${this.surname}. Возраст: ${this.age}.`)
    }
  };
  
  // Вызвали метод showInfo у объекта user
  user1.showInfo();