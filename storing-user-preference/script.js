const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("bgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");

const setValues = (fontSize, bgColor) => {
  selectFontSize.value = fontSize;
  selectBgColor.value = bgColor;
  mainElement.style.fontSize = fontSize;
  mainElement.style.backgroundColor = bgColor;
};

const initialSetup = () => {
  const fontSize = localStorage.getItem("fontSize");
  const bgColor = localStorage.getItem("bgColor");

  if (fontSize && bgColor) {
    setValues(fontSize, bgColor);
  }
  if (fontSize && !bgColor) {
    setValues(fontSize, "aqua");
  }
  if (!fontSize && bgColor) {
    setValues("16px", bgColor);
  }
};

const changeFontSize = (e) => {
  const selectedFontSize = e.target.value;
  mainElement.style.fontSize = selectedFontSize;
  localStorage.setItem("fontSize", selectedFontSize);
};
const changeBgColor = (e) => {
  const selectedBgColor = e.target.value;
  mainElement.style.backgroundColor = selectedBgColor;
  localStorage.setItem("bgColor", selectedBgColor);
};
const resetLocalStorage = () => {
  localStorage.removeItem("bgColor");
  localStorage.removeItem("fontSize");
  setValues("16px", "aqua");
};

selectFontSize.addEventListener("change", changeFontSize);
bgColor.addEventListener("change", changeBgColor);
resetButton.addEventListener("click", resetLocalStorage);

initialSetup();
