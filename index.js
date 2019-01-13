function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested').querySelector('.target')
}

// function increaseRankBy(n){
//   let allLi = document.querySelectorAll('.ranked-list li')
//     // array = []
//     allLi.forEach(element => {
//       element.innerHTML = parseInt(element.innerHTML)+n
//       //array.push(parseInt(element.innerHTML)+n)
//     })
// }

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n){
  let rankedListEl = document.querySelectorAll('ul.ranked-list li')
  rankedListEl = Array.from(rankedListEl)
  debugger
  rankedListEl.forEach((i) => {
	i.innerHTML = parseInt(i.innerHTML) + n
})
}
