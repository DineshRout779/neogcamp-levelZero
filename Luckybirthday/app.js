const btn = document.querySelector('.btn');
const dob = document.querySelector('#date');
const num = document.querySelector('#num');
const dateErrDiv = document.querySelector('#date-err');
const numErrDiv = document.querySelector('#num-err');
const sadDiv = document.querySelector('#sad');
const yayDiv = document.querySelector('#yay');
const logo = document.querySelector('#logo');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (dob.value !== '' && num.value !== '') {
    dateErrDiv.innerHTML = '';
    numErrDiv.innerHTML = '';

    // extracting input values from user
    let dobString = dob.value;
    let luckyNum = num.value;

    // remove hypens and change type to number

    dobString = Number(dobString.replaceAll('-', ''));
    luckyNum = Number(luckyNum);

    if (luckyNum > 0) {
      if (dobString % luckyNum === 0) {
        logo.style.display = 'none';
        yayDiv.style.display = 'block';
        sadDiv.style.display = 'none';
      } else {
        logo.style.display = 'none';
        yayDiv.style.display = 'none';
        sadDiv.style.display = 'block';
      }
    } else {
      numErrDiv.innerHTML = 'Please enter valid non-zero number';
    }
  } else if (dob.value !== '' && num.value == '') {
    dateErrDiv.innerHTML = '';
    numErrDiv.innerHTML = 'Please enter your lucky number';
  } else if (dob.value == '' && num.value !== '') {
    dateErrDiv.innerHTML = 'Please select your DOB';
    numErrDiv.innerHTML = '';
  } else {
    dateErrDiv.innerHTML = 'Please select your DOB';
    numErrDiv.innerHTML = 'Please enter your lucky number';
  }
});
