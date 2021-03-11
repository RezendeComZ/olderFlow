let duckResults = Array.from(document.querySelectorAll('.result__a')).filter(link => link.href.includes('stack'))

duckResults.forEach(link => {
  // link.href += "?direct"
  link.outerHTML += `<br><a href="${link.href}?direct" style="background-color: rgb(50, 205, 50); border-radius: 15px; padding: 5px 8px 5px 8px; margin-right: 5px">✅ Best answer</a>`
})

// duckResults[0].outerHTML += `<br><a href="nada"?direct" style="background-color: rgb(50, 205, 50); border-radius: 15px; padding: 5px 8px 5px 8px; margin-right: 5px">✅ Best answer</a>`