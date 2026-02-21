const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button')

buttons.forEach(btn => {
  btn.addEventListener('click', function() {

    buttons.forEach(button => {
      button.classList.remove('active-btn');
    })
    btn.classList.add('active-btn');
    display.innerText = `${btn.innerText} Clicked`;
    console.log(btn);
    anim();
  })
})


function anim(){

  // setTimeout(function(){
  //   this.buttons.a('anim');
  // }, 1000)
}