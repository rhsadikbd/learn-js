console.clear();
/*
const input = document.querySelector('input');
input.addEventListener('change', inputHandler);
function inputHandler(e){
  console.log(e.target.value);
}
  */
/*
const input = document.querySelectorAll('input[name=language]');
console.log(input);
// input.forEach(item => {
//   item.addEventListener('change', changeHandler);
// });
Array.from(input).map(item => {
  item.addEventListener('change', changeHandler);
})
function changeHandler(e){
  console.log(e.target.value);
}
  */

const selectedItem = document.querySelector('#department');
selectedItem.addEventListener('change', changeHandler);
function changeHandler(e){
  console.log(e.target.value);
}