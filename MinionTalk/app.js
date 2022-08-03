const btnTranslate = document.querySelector('#btn-translate');
const textInput = document.querySelector('#inputText');
const textOutput = document.querySelector('#outputText');

const url = 'https://api.funtranslations.com/translate/minion.json';

const getTranslationUrl = (text) => {
  return url + `?text=${text}`;
};

const handleClick = () => {
  text = textInput.value;

  fetch(getTranslationUrl(text))
    .then((response) => response.json())
    .then((json) => {
      textOutput.textContent = json.contents.translated;
    })
    .catch((err) => console.log(err));
};

btnTranslate.addEventListener('click', handleClick);
