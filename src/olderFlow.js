console.log('v9')

function qSelector(select) {
  return document.querySelector(select)
}

let dateNow = new Date();

let postDateDiv  = qSelector('time')
let postDateArray = postDateDiv.dateTime.split(/[:+T+\-]/)
let postDate = new Date(postDateArray[0], postDateArray[1],postDateArray[2], postDateArray[3],postDateArray[4]);
let differenceInTime = dateNow.getTime() - postDate.getTime()
let differenceInDays = parseInt(differenceInTime / (1000 * 3600 * 24)); 

if (differenceInDays > 4200) {
  postDateDiv.style.backgroundColor = 'green'
} else {
  postDateDiv.style.backgroundColor = 'red'
}

console.log(postDate)
console.log(differenceInTime)
console.log(differenceInDays)


