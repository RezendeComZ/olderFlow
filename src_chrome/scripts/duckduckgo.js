window.addEventListener('load', () => { // Chrome exclusive

let results = [];

let stackoverflow = Array.from(document.querySelectorAll('.result__a')).filter(link => link.href.includes('stackoverflow'))

stackoverflow.forEach(link => {
  link.href += "?direct"
  link.outerHTML += `<br><a href="${link.href}" style="background-color: rgb(50, 205, 50); border-radius: 15px; padding: 5px 8px 5px 8px; margin-right: 5px; line-height: 1.8; font-size: 80%;">✅ Best answer</a>`
})

let stackexchange = Array.from(document.querySelectorAll('.result__a')).filter(link => link.href.includes('stackexchange'))

stackexchange.forEach(link => {
  link.href += "?direct"
  link.outerHTML += `<br><a href="${link.href}" style="background-color: rgb(50, 205, 50); border-radius: 15px; padding: 5px 8px 5px 8px; margin-right: 5px; line-height: 1.8; font-size: 80%;">✅ Best answer</a>`
})


// Copy code // Ref: https://duckduckgo.com/?q=first+letter+javascript&t=h_&ia=web // https://duckduckgo.com/?q=Is+it+possible+to+embed+videos+in+questions%3F&t=h_&ia=web

let code = document.querySelectorAll('code')
let codesToCopy = []

code.forEach(code => {
  codesToCopy.push(code.innerText)
  code.outerHTML += `<br><button class="copyB" id="code${codesToCopy.length}">Copy</button>`
})

document.querySelectorAll('.copyB').forEach(item => {
  item.addEventListener('click', event => {
        navigator.clipboard.writeText(event.explicitOriginalTarget.parentElement.innerText.slice(0, -4))
  })
})
} )