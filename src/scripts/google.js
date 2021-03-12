function qSelector(select) {
  return document.querySelector(select)
}
let datesTxtDivs = document.querySelectorAll('.f') // Google - Dates

datesTxtDivs.forEach(element => {
  let elementDiv = element.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[0].href // Google - HREF
  if (elementDiv.includes('stackoverflow') || elementDiv.includes('stackexchange')){
    // let dateG = new Date (datesTxtDivs[0].textContent.split(' ')[2], 5) // Google - Year
    element.innerHTML += `<a href="${elementDiv}?direct" style="background-color: rgb(50, 205, 50); border-radius: 15px; padding: 5px 8px 5px 8px; margin-right: 5px">✅ Best answer</a>`
    element.style.color = 'green'
  }
})