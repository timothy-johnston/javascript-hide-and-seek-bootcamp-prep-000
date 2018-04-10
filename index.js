function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  //document.getElementsByTagName('div')
  return document.getElementById('nested').querySelector('div')
}

function increaseRankBy(n) {
  //var ranks = document.querySelectorAll('ul.ranked-list li');
  //for (let i = 0; i < ranks.length; i++) {
  //  ranks[i].innerHTML = ranks[i].innerHTML+5;
  //}
  //return ranks
  
  const lis = docuement.getElementByID('app').querySelectorAll('ul.ranked-list li')
  
}