console.log('v2')

function qSelector(select) {
  return document.querySelector(select)
}

let postDateRaw  = qSelector('time')

let postDate = postDateRaw.dateTime.split(/[:+T+\-]/)
postDateRaw.style.backgroundColor = 'blue'