let dateOfBirth = document.querySelector('#date');
let inputError = document.querySelector('#error');

const btn = document.querySelector('#btn');
let outputDiv = document.querySelector('#output');

const reverseString = (str) => {
  var listOfChars = str.split('');
  var reversedListOfChar = listOfChars.reverse();
  var reversedString = reversedListOfChar.join('');
  return reversedString;
};

const isStringPalindrome = (str) => {
  var reversedString = reverseString(str);
  return str === reversedString;
};

const convertDateToString = (date) => {
  let dateStr = { day: '', month: '', year: '' };
  if (date.day < 10) {
    dateStr.day = '0' + date.day;
  } else {
    dateStr.day = date.day.toString();
  }
  if (date.month < 10) {
    dateStr.month = '0' + date.month;
  } else {
    dateStr.month = date.month.toString();
  }
  dateStr.year = date.year.toString();
  return dateStr;
};

let date = {
  day: 5,
  month: 9,
  year: 2020,
};

const getDateInAllFormats = (date) => {
  let ddmmyyyy = date.day + date.month + date.year;
  let mmddyyyy = date.month + date.day + date.year;
  let yyyymmdd = date.year + date.month + date.day;
  let ddmmyy = date.day + date.month + date.year.slice(-2);
  let mmddyy = date.month + date.day + date.year.slice(-2);
  let yyddmm = date.year.slice(-2) + date.day + date.month;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
};

const checkPalindromeForAllDateFormats = (date) => {
  let dateFormatList = getDateInAllFormats(date);
  let palindromeList = [];

  for (let i = 0; i < dateFormatList.length; i++) {
    let result = isStringPalindrome(dateFormatList[i]);
    palindromeList.push(result);
  }
  return palindromeList;
};

const isLeapYear = (year) => {
  if (year % 400 === 0) return true;

  if (year % 100 === 0) return false;

  if (year % 4 === 0) return true;

  return false;
};

const getNextDate = (date) => {
  let day = date.day + 1;
  let month = date.month;
  let year = date.year;

  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2) {
    if (isLeapYear(year)) {
      if (day > 29) {
        day = 1;
        month = 3;
      }
    } else {
      if (day > 28) {
        day = 1;
        month = 3;
      }
    }
  } else {
    if (day > daysInMonth[month - 1]) {
      day = 1;
      month++;
    }
  }

  if (month > 12) {
    month = 1;
    year++;
  }

  return {
    day: day,
    month: month,
    year: year,
  };
};

const getNextPalindromeDate = (date) => {
  let nextDate = getNextDate(date);
  let ctr = 0;

  while (1) {
    ctr++;
    let dateStr = convertDateToString(nextDate);
    let resultList = checkPalindromeForAllDateFormats(dateStr);

    for (let i = 0; i < resultList.length; i++) {
      if (resultList[i]) {
        return [ctr, nextDate];
      }
    }
    nextDate = getNextDate(nextDate);
  }
};

const getPreviousDate = (date) => {
  let day = date.day - 1;
  let month = date.month;
  let year = date.year;

  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (day === 0) {
    month--;

    if (month === 0) {
      month = 12;
      day = 31;
      year--;
    } else if (month === 2) {
      if (isLeapYear(year)) {
        day = 29;
      } else {
        day = 28;
      }
    } else {
      day = daysInMonth[month - 1];
    }
  }

  return {
    day: day,
    month: month,
    year: year,
  };
};

const getPreviousPalindromeDate = (date) => {
  let previousDate = getPreviousDate(date);
  let ctr = 0;

  while (1) {
    ctr++;
    let dateStr = convertDateToString(previousDate);
    let resultList = checkPalindromeForAllDateFormats(dateStr);

    for (let i = 0; i < resultList.length; i++) {
      if (resultList[i]) {
        return [ctr, previousDate];
      }
    }
    previousDate = getPreviousDate(previousDate);
  }
};

const handleBtnClick = () => {
  let bdayString = dateOfBirth.value;
  if (bdayString === '') {
    inputError.style.display = 'block';
    inputError.innerHTML = 'This field is required!';
  } else {
    inputError.style.display = 'none';
    let date = bdayString.split('-');
    let yyyy = date[0];
    let mm = date[1];
    let dd = date[2];

    date = {
      day: Number(dd),
      month: Number(mm),
      year: Number(yyyy),
    };

    let dateStr = convertDateToString(date);
    let list = checkPalindromeForAllDateFormats(dateStr);
    let isPalindrome = false;

    for (let i = 0; i < list.length; i++) {
      if (list[i]) {
        isPalindrome = true;
        break;
      }
    }

    if (!isPalindrome) {
      const [ctr1, nextDate] = getNextPalindromeDate(date);
      const [ctr2, prevDate] = getPreviousPalindromeDate(date);

      if (ctr1 > ctr2) {
        outputDiv.innerText = `The nearest palindrome date is ${prevDate.day}-${prevDate.month}-${prevDate.year}, you missed by ${ctr2} days.`;
      } else {
        outputDiv.innerText = `The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed by ${ctr1} days.`;
      }
    } else {
      outputDiv.innerText = 'Yay! Your birthday is palindrome!';
    }
  }
};

btn.addEventListener('click', (e) => {
  e.preventDefault();
  handleBtnClick();
});
