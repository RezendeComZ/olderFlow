function qSelector(select) {
  return document.querySelector(select)
}
function differenceInDays(date) {
  let differenceInTime = dateNow.getTime() - date.getTime();
  return parseInt(differenceInTime / (1000 * 3600 * 24)); 
}
let dateNow = new Date();

// Question
let questionDateDiv  = qSelector('time')
let questionDate = new Date(questionDateDiv.dateTime)

// Question Style
questionDateDiv.style.color = 'white'
questionDateDiv.style.padding = '5px 5px 5px 8px'
questionDateDiv.style.borderRadius = '20px 0px 0px 20px'

// Background color
let daysInHSL = parseInt((360 * differenceInDays(questionDate)) / 3600) // 360 (HSL max value), 3600 (10 years) 
if (daysInHSL > 360) {
  questionDateDiv.style.backgroundColor = `hsl(360, 100%, 60%)`

} else if (daysInHSL < 90) {
  questionDateDiv.style.backgroundColor = `hsl(90, 100%, 60%)`
}
  else {
  questionDateDiv.style.backgroundColor = `hsl(${daysInHSL}, 100%, 60%)`
}
if (daysInHSL < 190) {
  questionDateDiv.style.color = 'black'
}

// Warning
let emoji = '';
let parentTime = document.querySelector('div.ws-nowrap:nth-child(1)');
parentTime.style.transform = 'scale(1.1)'
parentTime.innerHTML += '<span id="warning"></span>';
let warningStyle = qSelector('#warning')
warningStyle.style.color = 'white'
warningStyle.style.backgroundColor = 'green'
warningStyle.style.padding = '5px 8px 5px 5px'
warningStyle.style.borderRadius = '0px 20px 20px 0px'

function es6() {
  warningStyle.innerText = 'ES6';
  warningStyle.style.backgroundColor = 'green'
  emojiStatus('old')
  console.log('ES6')
}
function preES6() {
  warningStyle.innerText = 'pre-ES6';
  warningStyle.style.backgroundColor = 'orange'
  emojiStatus('older')
  console.log('pre-ES6: ' + questionDate.getFullYear())
}
function es6Plus() {
  warningStyle.innerText = 'ES6+';
  emojiStatus('new')
  warningStyle.style.backgroundColor = `rgb(50, 205, 50)`
  console.log('ES6+')
}
/// NOT WORKING AS EXPECTED!! Fazer amanha: if es6 +, else if es6, else pre-es6
// New If:
if (questionDate.getFullYear() >= 2016 && questionDate.getMonth() > 4) {
  es6Plus();
} else if(questionDate.getFullYear() == 2015 && questionDate.getMonth() > 4) {
  es6();
} else {
  preES6();
}

// Title emoji
// TODO: Check system support for Unicode 12
function emojiStatus(status) {
  if (status == 'older') emoji = '🟠'
  if (status == 'old') emoji = '🔵'
  if (status == 'new') emoji = '🟢'
}


newTitle = `${emoji} `+ document.querySelector('title').textContent
qSelector('title').textContent = newTitle