function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  return
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

    for (let i = 0, l = rankedLists.length; i < l; i++) {
    let childrenList = rankedLists[i].children;
    for (let v = 0, c = childrenList.length; v < c; v++) {
      childrenList[v].innerHTML = parseInt(childrenList[v].innerHTML) + n;
    }
  }
}
