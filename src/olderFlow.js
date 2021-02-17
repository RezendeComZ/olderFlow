console.log('v14')

function qSelector(select) {
  return document.querySelector(select)
}

let dateNow = new Date();

let postDateDiv  = qSelector('time')
let postDateArray = postDateDiv.dateTime.split(/[:+T+\-]/)
let postDate = new Date(postDateArray[0], postDateArray[1],postDateArray[2], postDateArray[3],postDateArray[4]);
let differenceInTime = dateNow.getTime() - postDate.getTime()
let differenceInDays = parseInt(differenceInTime / (1000 * 3600 * 24)); 

// 10 anos: 3600

// let daysInHSL = (100 * differenceInDays) / 3600 // 10 years
let daysInHSL = parseInt((360 * differenceInDays) / 3600) // 10 years

if (daysInHSL > 360) {
  postDateDiv.style.backgroundColor = `hsl(360, 100%, 50%)`

} else {
  postDateDiv.style.backgroundColor = `hsl(${daysInHSL}, 100%, 50%)`
}

// console.log(postDate)
// console.log(differenceInTime)
// console.log(differenceInDays)
// console.log(daysInHSL)
// console.log(postDateDiv.style.backgroundColor)


