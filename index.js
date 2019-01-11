// function getFirstSelector(selector) {
//   return document.querySelector(selector);
// };

const getFirstSelector = selector => document.querySelector(selector);

const nestedTarget = target => document.querySelector('#nested .target')



const increaseRankBy = (n) => {
  var lists = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < lists.length; i++) {
    debugger
    lists[i].innerHTML = parseInt(lists[i].innerText) + n
  }
}


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
