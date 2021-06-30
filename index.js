// function getFirstSelector(selector) {
//   return document.querySelector(selector);
// };

const getFirstSelector = selector => document.querySelector(selector);

const nestedTarget = target => document.querySelector('#nested .target')




const increaseRankBy = (n) => {
  var lists = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < lists.length; i++) {
    lists[i].innerHTML = parseInt(lists[i].innerHTML) + n
  }
}

// function increaseRankBy(n) {
//   const rankedLists = document.querySelectorAll('.ranked-list');
//
//   for (let i = 0, l = rankedLists.length; i < l; i++) {
//     let children = rankedLists[i].children;
//
//     for (let j = 0, k = children.length; j < k; j++) {
//       children[j].innerHTML = parseInt(children[j].innerHTML) + n;
//     }
//   }
// }

const deepestChild = () => {
  const allDivs = document.querySelectorAll('#grand-node div')
  return allDivs[allDivs.length-1]
}
// function deepestChild() {
// var foo = document.getElementById('div#grand-node');
// for (var i = 0; i < foo.children.length; i++) {
//       tree = tree.children[0]
// }
// return tree
// }

// function deepestChild() {
//   let node = document.getElementById('grand-node');
//   let nextNode = node.children[0];
//
//   while (nextNode) {
//     node = nextNode;
//     nextNode = node.children[0];
//   }
//
//   return node;
// }
