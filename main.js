/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/
const singleDie = document.querySelector('#d6-roll')

const double = document.querySelector('main')

const twelveDice = document.querySelector('#d12-roll')

const twentyDice = document.querySelector('#d20-roll')

const resetButton = document.querySelector('#reset-button')



/*******************
 * EVENT LISTENERS *
 *******************/

document.querySelector("#d6-roll").addEventListener("click",()=>{
  sixes.push(getRandomNumber(6))
  document.getElementById("d6-roll").src = `./images/d6/${sixes[sixes.length-1]}.png`
  getresults("d6-rolls",sixes)
})

let dtotal = []
document.querySelector("main").addEventListener("click",()=>{
  doubleSixRoll(getRandomNumber(6),getRandomNumber(6),doubleSixes)
  // document.getElementById("double-d6-roll-1").src = `./images/d6/${doubleSixes[doubleSixes.length-2]}.png`
  // document.getElementById("double-d6-roll-2").src = `./images/d6/${doubleSixes[doubleSixes.length-1]}.png`
  getresults("double-d6-rolls",doubleSixes)
})

document.querySelector("#d12-roll").addEventListener("click",()=>{
   twelves.push(getRandomNumber(12))
   document.getElementById("d12-roll").src = `images/numbers/${twelves[twelves.length-1]}.png`
   getresults("d12-rolls",twelves)
})

document.querySelector("#d20-roll").addEventListener("click",()=>{
  twenties.push(getRandomNumber(20))
  document.getElementById("d20-roll").src = `images/numbers/${twenties[twenties.length-1]}.png`
  getresults("d20-rolls",twenties)
})

/******************
 * RESET FUNCTION *
 ******************/
let resetarr = [sixes,doubleSixes,twelves,twenties,dtotal]
document.querySelector("#reset-button").addEventListener("click",()=>{
  for(let small of resetarr){
    small.length = 0
  }
  document.getElementById("d6-roll").src = "./images/start/d6.png"
  document.getElementById("double-d6-roll-1").src = "./images/start/d6.png"
  document.getElementById("double-d6-roll-2").src = "./images/start/d6.png"
  document.getElementById("d12-roll").src = "./images/start/d12.jpeg"
  document.getElementById("d20-roll").src = "./images/start/d20.jpg"
  clearresults(resultsarr)
})
const resultsarr = ["d6-rolls-mean","d6-rolls-median","d6-rolls-mode","double-d6-rolls-mean","double-d6-rolls-median","double-d6-rolls-mode","d12-rolls-mean","d12-rolls-median","d12-rolls-mode","d20-rolls-mean","d20-rolls-median","d20-rolls-mode"]
const clearresults = function(arr){
  for(let id of arr){
    document.getElementById(id).innerHTML = ""
  }
}

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
const mean = function(arr){
  let total = 0
  for(let i = 0;i < arr.length; i++){
    total = total + arr[i]
  }
  return (total / arr.length).toFixed(3)
}

const median = function(arr){
  if(arr.length === 0){
  }else if(arr.length % 2 === 0){
    return (arr[arr.length/2 - 1] + arr[arr.length/2]) / 2
  } else {
    return arr[arr.length / 2 -.5] 
  }
}

const mode = function(arr){
  let obj = {}
  for(let key of arr){
    if(obj[key] === undefined){
      obj[key] = 1
    } else {
      obj[key]++
    }
  }
  let highestarr = []
  let highest = 0
  for(let key in obj){
    if(obj[key]=== highest){
      highestarr.push(key)
    } else if(obj[key] > highest){
      highest = obj[key]
      highestarr = [key]
    }
  }
  return highestarr.join(", ")
}
