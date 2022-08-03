let purchasePrice = document.querySelector('#purchase-price');
let stocksQuantity = document.querySelector('#stocks-quantity');
let currentPrice = document.querySelector('#current-price');

const checkBtn = document.querySelector('#btn-check');
const resetBtn = document.querySelector('#btn-reset');

const outputDiv = document.querySelector('#output');

let purchaseInputError = document.querySelector('#purchase-error');
let quantityInputError = document.querySelector('#quantity-error');
let currentInputError = document.querySelector('#current-error');

checkBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let costPrice = purchasePrice.value;
  let qty = stocksQuantity.value;
  let currPrice = currentPrice.value;
  validateData(costPrice, qty, currPrice);
});

resetBtn.addEventListener('click', () => {
  clearInputError();
  outputDiv.innerHTML = '';
  outputDiv.style.display = 'none';
});

const clearInputError = () => {
  purchaseInputError.innerHTML = '';
  quantityInputError.innerHTML = '';
  currentInputError.innerHTML = '';
};

const validateData = (costPrice, qty, currPrice) => {
  clearInputError();
  if (costPrice === '' || costPrice <= 0) {
    purchaseInputError.innerHTML = 'Invalid input';
  }
  if (qty === '' || qty <= 0) {
    quantityInputError.innerHTML = 'Invalid input';
  }
  if (currPrice === '' || currPrice < 0) {
    currentInputError.innerHTML = 'Invalid input';
  }
  if (costPrice !== '' && qty !== '' && currPrice !== '') {
    if (costPrice > 0 && qty > 0 && currPrice > 0) {
      calculateReturn(costPrice, qty, currPrice);
    }
  }
};

const calculateReturn = (costPrice, qty, currPrice) => {
  let diff = (costPrice - currPrice) * qty;
  let perc = (diff / (costPrice * qty)) * 100;
  perc = perc.toPrecision(2);
  outputDiv.style.display = 'block';
  outputDiv.innerHTML = '';
  if (diff > 0) {
    let msg = `${Math.abs(perc)}% loss.
       Lost amount is ${Math.abs(diff)} Rupees`;
    outputDiv.style.backgroundColor = 'rgb(246, 97, 97)';
    showOutput(msg);
  } else if (perc < 0) {
    let msg = `${Math.abs(perc)}% profit. Profit amount is ${Math.abs(
      diff
    )} Rupees`;
    outputDiv.style.backgroundColor = 'rgb(67, 228, 129)';
    showOutput(msg);
  } else {
    let msg = 'Neither profit nor loss!';
    outputDiv.style.backgroundColor = 'rgb(67, 228, 129)';
    showOutput(msg);
  }
};

const showOutput = (msg) => {
  outputDiv.innerHTML = msg;
};
