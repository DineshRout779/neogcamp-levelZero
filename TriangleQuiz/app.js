const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');
const tabIndicator = document.querySelector('.active-indicator');
const outputDivs = document.querySelectorAll('.output');
const resetBtns = document.querySelectorAll('.reset');

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', () => {
    removeActive(); //remove all active classes
    switchTab(i); //add active to current tab
  });
}

const clearOutput = () => {
  for (let i = 0; i < outputDivs.length; i++) {
    if (outputDivs[i].innerHTML !== '') {
      outputDivs[i].innerHTML = '';
    }
  }
};

for (let i = 0; i < resetBtns.length; i++) {
  resetBtns[i].addEventListener('click', clearOutput);
}

const removeActive = () => {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
    contents[i].classList.remove('active');
  }
};

const switchTab = (i) => {
  clearOutput();
  tabs[i].classList.add('active');
  contents[i].classList.add('active');
  tabIndicator.style.left = `${(100 / tabs.length) * i}%`;
};

let firstAngle = document.querySelector('#first-angle');
let secondAngle = document.querySelector('#second-angle');
let thirdAngle = document.querySelector('#third-angle');
let angleBtn = document.querySelector('#angle-btn');
let angleOutput = document.querySelector('#angle-output');

const isTriangle = (angle1, angle2, angle3) => {
  angle1 = Number(angle1);
  angle2 = Number(angle2);
  angle3 = Number(angle3);
  let sum = angle1 + angle2 + angle3;
  if (sum === 180) {
    angleOutput.style.color = 'green';
    angleOutput.innerHTML = '<h2>Yayy!! This angles make a &#x25B3;</h2>';
    window.scrollTo(0, document.body.scrollHeight);
  } else {
    angleOutput.style.color = 'red';
    angleOutput.innerHTML =
      '<h2>No!! Thease angles do not form a &#x25B3;</h2>';
    window.scrollTo(0, document.body.scrollHeight);
  }
};

let bLength = document.querySelector('#base');
let pLength = document.querySelector('#height');
let hypotenuseBtn = document.querySelector('#hypotenuse-btn');
let hypotenuseOutput = document.querySelector('#hypotenuse-output');

const findHypotenuse = (b, p) => {
  let h = Math.sqrt(b * b + p * p);
  hypotenuseOutput.innerHTML = `<h2>Hypotenuse length is ${h.toFixed(
    2
  )} units</h2>`;
  window.scrollTo(0, document.body.scrollHeight);
};

let baseOfTriangle = document.querySelector('#base-of-triangle');
let heightOfTriangle = document.querySelector('#height-of-triangle');
const areaBtn = document.querySelector('#area-btn');
let areaOutput = document.querySelector('#area-output');

const findArea = (b, h) => {
  let a = 0.5 * (b * h);
  areaOutput.innerHTML = `<h2>Area of &#x25B3; is ${a.toFixed(2)} units</h2>`;
  window.scrollTo(0, document.body.scrollHeight);
};

let firstAns = document.querySelectorAll('input[name="first-ans"]');
let secondAns = document.querySelectorAll('input[name="second-ans"]');
let thirdAns = document.querySelectorAll('input[name="third-ans"]');
let fourthAns = document.querySelectorAll('input[name="fourth-ans"]');
let fifthAns = document.querySelectorAll('input[name="fifth-ans"]');
const quizBtn = document.querySelector('#quiz-btn');
let quizOutput = document.querySelector('#quiz-output');

const correctAns = ['90degree', 'right-angled', '13', 'median', 'two-sides'];

const showScore = (score) => {
  quizOutput.innerHTML = `<h2>Your score is ${score}`;
  window.scrollTo(0, document.body.scrollHeight);
};

const findScore = (selectedAns) => {
  let score = 0;
  if (selectedAns.length === 0) {
    quizOutput.innerHTML = 'please choose answers!!';
    window.scrollTo(0, document.body.scrollHeight);
  } else {
    for (let i = 0; i < selectedAns.length; i++) {
      // if (selectedAns[i] === correctAns[i]) {
      //   score++;
      // }
      if (correctAns.includes(selectedAns[i])) {
        score++;
      }
    }
    showScore(score);
  }
};

const collectAnswers = () => {
  let selectedAns = [];
  for (let i = 0; i < firstAns.length; i++) {
    if (firstAns[i].checked) {
      selectedAns.push(firstAns[i].value);
      break;
    }
  }
  for (let i = 0; i < secondAns.length; i++) {
    if (secondAns[i].checked) {
      selectedAns.push(secondAns[i].value);
      break;
    }
  }
  for (let i = 0; i < thirdAns.length; i++) {
    if (thirdAns[i].checked) {
      selectedAns.push(thirdAns[i].value);
      break;
    }
  }
  for (let i = 0; i < fourthAns.length; i++) {
    if (fourthAns[i].checked) {
      selectedAns.push(fourthAns[i].value);
      break;
    }
  }
  for (let i = 0; i < fifthAns.length; i++) {
    if (fifthAns[i].checked) {
      selectedAns.push(fifthAns[i].value);
      break;
    }
  }
  findScore(selectedAns);
};

// quiz button
quizBtn.addEventListener('click', (e) => {
  e.preventDefault();
  collectAnswers();
});

// area button
areaBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (baseOfTriangle.value !== '' && heightOfTriangle.value !== '') {
    if (baseOfTriangle.value > 0 && heightOfTriangle.value > 0) {
      findArea(baseOfTriangle.value, heightOfTriangle.value);
    } else {
      areaOutput.innerHTML = `<h2>Please enter valid non-zero values</h2>`;
      window.scrollTo(0, document.body.scrollHeight);
    }
  }
});

// hypotenuse button
hypotenuseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (bLength.value !== '' && pLength.value !== '') {
    if (bLength.value > 0 && pLength.value > 0) {
      findHypotenuse(bLength.value, pLength.value);
    } else {
      hypotenuseOutput.innerHTML = `<h2>Please enter valid non-zero values</h2>`;
      window.scrollTo(0, document.body.scrollHeight);
    }
  }
});

// angle button
angleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (
    firstAngle.value !== '' &&
    secondAngle.value !== '' &&
    thirdAngle.value !== ''
  ) {
    if (firstAngle.value > 0 && secondAngle.value > 0 && thirdAngle.value > 0)
      isTriangle(firstAngle.value, secondAngle.value, thirdAngle.value);
    else {
      angleOutput.innerHTML = '<h2>Please enter valid angles</h2>';
      window.scrollTo(0, document.body.scrollHeight);
    }
  }
});

window.addEventListener('load', switchTab(0));
