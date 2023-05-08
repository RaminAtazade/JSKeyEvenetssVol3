// sAG SOL UST ALT BUTTONLARI
function moveRight() {
    var daire = document.querySelector(".daire");
    var daireWidth = parseInt(getComputedStyle(daire).getPropertyValue("width"), 10);
    daire.style.left = (daire.offsetLeft + daireWidth) + "px";
  }
  document.getElementById("sag").onclick = moveRight;
  
  function moveUp() {
    var daire = document.querySelector(".daire");
    var daireHeight = parseInt(getComputedStyle(daire).getPropertyValue("width"), 10);
    daire.style.top = (daire.offsetTop - daireHeight) + "px";
  }
  document.getElementById("ust").onclick = moveUp;
  
  function moveDown() {
    var daire = document.querySelector(".daire");
    var daireHeight = parseInt(getComputedStyle(daire).getPropertyValue("height"), 10);
    daire.style.top = (daire.offsetTop + daireHeight) + "px";
  }
  document.getElementById("alt").onclick = moveDown;
//   buttons
const stepsInput = document.querySelector('#steps');
const pultButtons = document.querySelectorAll('.pult button');

pultButtons.forEach(button => {
  button.addEventListener('click', () => {
    const steps = parseInt(stepsInput.value);
    if (Number.isInteger(steps) && steps > 1) {
      for (let i = 1; i < steps; i++) {
        button.click();
      }
    }
  });
});