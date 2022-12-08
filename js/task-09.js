function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  cngColorBtnEl: document.querySelector(".change-color"),
  textEl: document.querySelector(".color"),
};

refs.cngColorBtnEl.addEventListener("click", onCngColorBtnClick);

function onCngColorBtnClick() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;

  refs.textEl.textContent = randomColor;
}