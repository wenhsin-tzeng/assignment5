// document.body.addEventListener("click", ChangeBgColor);
// function ChangeBgColor(event){
//   console.log('clicked:', event.target);
//   event.target.style.backgroundColor='black';
// }

// window.onclick = ChangeBgColor;
//
// function ChangeBgColor() {
//   document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
// }
var Li = document.getElementById('letteri');
Li.addEventListener('click', AddiAnimation)
function AddiAnimation(){
  // Li.style.backgroundColor="yellow";
  Li.classList.add('animation');
}
