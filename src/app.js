const scores = {
    Anna: 10,
    Olga: 1,
    Ivan: 5,
    }

function getScore(scores){

    let sum = 0
    for (let value in scores) {
        sum += scores[value];
      }
      
      return sum
}

console.log(getScore(scores))