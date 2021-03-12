// Add the other website
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



// duckResults[0].outerHTML += `<br><a href="nada"?direct" style="background-color: rgb(50, 205, 50); border-radius: 15px; padding: 5px 8px 5px 8px; margin-right: 5px">✅ Best answer</a>`

// Copy code // Ref: https://duckduckgo.com/?q=first+letter+javascript&t=h_&ia=web

