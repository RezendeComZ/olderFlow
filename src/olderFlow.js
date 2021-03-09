/* TODO
- Create an exception on StackExchange to not use "warning function"
- Show on Google/Duck/Bing/Yahoo a color tag 'Asked about two years ago'(based on on: https://stackoverflow.com/questions/:id)
- Accepted answer direct link from search
- Customize title
*/

let dateNow = new Date();
let warningState = true;
let emojiState = true;

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
  } else if (questionDate.getFullYear() >= 2016) {
    es6();    
  } else {
    preES6();
  }
  if (emojiOnTitle) titleEmoji();
}

// Question
let questionDateDiv = qSelector('time')
let questionDate = new Date(questionDateDiv.dateTime)
timeStyleAndProcessing(questionDate, questionDateDiv, warningState, emojiState)
document.querySelector('time').setAttribute('id','tempo')

// Answers (edited)
let answersAll = Array.from(document.querySelectorAll('.relativetime'))

answersAll.forEach(div => {
  let answerDate = new Date(div.title)
  div.style.backgroundColor = `rgb(50, 205, 50)`
  timeStyleAndProcessing(answerDate, div, false, false)
})

// First Answer
let firstAnswerDiv = document.getElementsByClassName('answer accepted-answer')[0].getElementsByClassName('relativetime')[0]
let firstAnswerYear = 20 + firstAnswerDiv.innerText.split(' ')[2].slice(1)
let firstAnswerDate = new Date(firstAnswerYear, 5)

const firstAnswerLinkPath = 'html.html__responsive body.question-page.unified-theme div.container div#content.snippet-hidden div div.inner-content.clearfix div.grid.fw-wrap.pb8.mb16.bb.bc-black-075 div.grid--cell.ws-nowrap.mr16.mb8';
const firstAnswerLinkDiv = document.querySelector(firstAnswerLinkPath)

firstAnswerLinkDiv.outerHTML += `<a><div class="grid--cell ws-nowrap mr16 mb8"><span id="answerLink">✅: <span style="text-shadow: 2px 2px 7px white">${firstAnswerDate.getFullYear()}</span></span></div></a>`;

let answerLink = document.getElementById('answerLink')
let acceptedAnswer = document.querySelector(".accepted-answer");

answerLink.addEventListener('click', () => {
  acceptedAnswer.scrollIntoView();
})

timeStyleAndProcessing(firstAnswerDate, document.getElementById('answerLink'), false, false)
// answerLink.style.textDecoration = 'underline'
  



// Direct to accept answer // WIP
// let direct = 'WIP' // window.location.pathname
// if (direct == window.location.pathname) {
//   let acceptedAnswer = document.querySelector(".accepted-answer");
//   acceptedAnswer.id += ' acceptedLink'
//   acceptedAnswer.scrollIntoView();
// }

