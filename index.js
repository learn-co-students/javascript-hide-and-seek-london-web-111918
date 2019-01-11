function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n){
  let rankedListEl = document.querySelectorAll('ul.ranked-list li')
  rankedListEl = Array.from(rankedListEl)
  rankedListEl.forEach((i) => {
	i.innerHTML = parseInt(i.innerHTML) + n
})
}

function deepestChild(){
  let node = document.querySelector("#grand-node")
  let nextNode = node.children[0]
  while(nextNode){
    node = nextNode;
    nextNode = node.children[0]
  }
  return node;
}
