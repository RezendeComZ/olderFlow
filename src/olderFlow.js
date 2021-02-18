function qSelector(select) {
  return document.querySelector(select)
}

let dateNow = new Date();
let postDateDiv  = qSelector('time')

// Style
postDateDiv.style.padding = '5px 5px 5px 8px'
postDateDiv.style.borderRadius = '20px 0px 0px 20px'

// Date processing
let postDateArray = postDateDiv.dateTime.split(/[:+T+\-]/)
let postDate = new Date(postDateArray[0], postDateArray[1],postDateArray[2], postDateArray[3],postDateArray[4]);
let differenceInTime = dateNow.getTime() - postDate.getTime()
let differenceInDays = parseInt(differenceInTime / (1000 * 3600 * 24)); 

// Background color
let daysInHSL = parseInt((360 * differenceInDays) / 3600) // 360 (HSL max value), 3600 (10 years) 
if (daysInHSL > 360) {
  postDateDiv.style.backgroundColor = `hsl(360, 100%, 60%)`

} else if (daysInHSL < 90) {
  postDateDiv.style.backgroundColor = `hsl(90, 100%, 60%)`
}
  else {
  postDateDiv.style.backgroundColor = `hsl(${daysInHSL}, 100%, 60%)`
}

// Warning
let parentTime = document.querySelector('div.ws-nowrap:nth-child(1)');
parentTime.innerHTML += '<span id="warning"></span>';
let warningStyle = qSelector('#warning')
warningStyle.style.color = 'white'
warningStyle.style.backgroundColor = 'green'
warningStyle.style.padding = '5px 8px 5px 5px'
warningStyle.style.borderRadius = '0px 20px 20px 0px'

if (postDate.getFullYear() < 2015 || postDate.getFullYear() == 2015 && postDate.getMonth() < 6) { //
  warningStyle.innerText = 'pre-ES6';
  warningStyle.style.backgroundColor = 'orange'
  } else if (postDate.getFullYear() == 2015 && postDate.getMonth() >= 6){
   warningStyle.innerText = 'ES6';
   warningStyle.style.backgroundColor = 'green'
  } else {
    warningStyle.innerText = 'ES6+';
    // warningStyle.innerText.style.color = 'black';
   warningStyle.style.backgroundColor = `rgb(50, 205, 50)`
 }