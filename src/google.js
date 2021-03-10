function qSelector(select) {
  return document.querySelector(select)
}
// Google

let datesTxtDivs = document.querySelectorAll('.f') // Google - Dates

datesTxtDivs.forEach(element => {
  let elementDiv = element.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[0].href // Google - HREF
  if (elementDiv.includes('stackoverflow') || elementDiv.includes('stackexchange')){
    // let dateG = new Date (datesTxtDivs[0].textContent.split(' ')[2], 5) // Google - Year
    element.innerHTML += `<a href="${elementDiv}?direct" style="background-color: rgb(50, 205, 50); border-radius: 15px; padding: 5px 8px 5px 8px; margin-right: 5px">✅ Best answer</a>`
    element.style.color = 'green'
  }
})


// datesTxtDivs [0].parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[0]


// let datesTxtDivs = Array.from(document.getElementsByClassName('f'))
// datesTxtDivs[0].style.color = 'green'
// timeStyleAndProcessing(answerDate, div, true, false)
// document.getElementsByClassName('f')[0].parentElement.parentElement.parentElement.parentElement.getElementsByTagName('a')[0].href
