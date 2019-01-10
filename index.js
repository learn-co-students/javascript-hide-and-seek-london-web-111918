const getFirstSelector = selector => document.querySelector(selector)

const nestedTarget = () => document.getElementById("nested").querySelector(".target")

const deepestChild = () => document.querySelector("#grand-node").firstElementChild.firstElementChild.firstElementChild.firstElementChild

const ranks = Array.from(document.querySelectorAll(".ranked-list"))

const increaseRankBy = (n) => ranks.forEach(function(list)
  {
    return Array.from(list.children).forEach(function(li)
    {
      return li.innerHTML = parseInt(li.innerHTML) + n
    })
  })
