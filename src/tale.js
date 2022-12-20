console.log(Kolobok("дедушка"))
console.log(Kolobok("заяц"))
console.log(Kolobok("лиса"))
console.log(Kolobok("бабушка"))

function Kolobok(personage) {
    switch(personage) {
      // если character дедушка
      case "дедушка":
        return 'Я от дедушки ушёл'
      // если character заяц
      case "заяц":
        return 'Я от зайца ушёл'
      // если character лиса
      case "лиса":
        return 'Меня съели'
      // если haracter другой персонаж
      default:
        return 'В сказке не написано'
    } 
  }


console.log(newYear("Дед Мороз"))
console.log(newYear("Снегурочка"))

function newYear(character) {
  if(character ==="Дед Мороз" || character === "Снегурочка") {
      return `${character}! ${character}! ${character}!`
  }
  }