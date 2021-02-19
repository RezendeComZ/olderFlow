let dateNow = new Date();

function qSelector(select) {
  return document.querySelector(select)
}
function timeStyleAndProcessing(date, div, warningIsOn, emojiOnTitle) {
  div.style.color = 'white'
  div.style.padding = '5px 8px 5px 8px'
  div.style.borderRadius = '20px'
  let daysInHSL = parseInt((360 * differenceInDays(date)) / 3600) // 360 (HSL max value), 3600 (10 years) 
  if (daysInHSL > 360) {
    div.style.backgroundColor = `hsl(360, 100%, 60%)`
  } else if (daysInHSL < 90) {
    div.style.backgroundColor = `hsl(90, 100%, 60%)`
  }
  else {
    div.style.backgroundColor = `hsl(${daysInHSL}, 100%, 60%)`
  }
  if (daysInHSL < 190) {
    div.style.color = 'black'
  }
  if (warningIsOn == true) warning(div, emojiOnTitle)
}
function differenceInDays(date) {
  let differenceInTime = dateNow.getTime() - date.getTime();
  return parseInt(differenceInTime / (1000 * 3600 * 24)); 
}
function warning(div, emojiOnTitle) {
  let emoji = '';
  // TODO: Check system support for Unicode 12
  function emojiStatus(status) {
    if (status == 'older') emoji = '🟠';
    if (status == 'old') emoji = '🔵';
    if (status == 'new') emoji = '🟢';
  }
  function titleEmoji() {
    let newTitle = `${emoji} `+ document.querySelector('title').textContent
    qSelector('title').textContent = newTitle
  }
  questionDateDiv.style.borderRadius = '20px 0px 0px 20px'
  div.outerHTML += '<span id="warning"></span>';
  let warningStyle = qSelector('#warning')
  warningStyle.style.color = 'white'
  warningStyle.style.backgroundColor = 'green'
  warningStyle.style.padding = '5px 8px 5px 5px'
  warningStyle.style.borderRadius = '0px 20px 20px 0px'
  
  function es6() {
    warningStyle.innerText = 'ES6';
    warningStyle.style.backgroundColor = 'green'
    emojiStatus('old')
  }
  function preES6() {
    warningStyle.innerText = 'pre-ES6';
    warningStyle.style.backgroundColor = 'orange'
    emojiStatus('older')
  }
  function es6Plus() {
    warningStyle.innerText = 'ES6+';
    emojiStatus('new')
    warningStyle.style.backgroundColor = `rgb(50, 205, 50)`
  }
  if (questionDate.getFullYear() >= 2016 && questionDate.getMonth() > 4) {
    es6Plus();
  } else if(questionDate.getFullYear() == 2015 && questionDate.getMonth() > 4) {
    es6();
  } else {
    preES6();
  }
  if (emojiOnTitle) titleEmoji();
}


// Question
let questionDateDiv  = qSelector('time')
let questionDate = new Date(questionDateDiv.dateTime)
timeStyleAndProcessing(questionDate, questionDateDiv, true, true)