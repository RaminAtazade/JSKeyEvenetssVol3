function setBoxSize() {
    var sizeValue = document.getElementById("size").value;
    document.querySelector(".qutu").style.width = sizeValue + "px";
    document.querySelector(".qutu").style.height = sizeValue + "px";
  }
  
  document.getElementById("size").addEventListener("input", setBoxSize);
function setBallSize(){
    var sizeValue = document.getElementById("sizeofball").value;
    document.querySelector(".daire").style.width = sizeValue +"px"
    document.querySelector(".daire").style.height = sizeValue +"px";
}
document.getElementById("sizeofball").addEventListener("input", setBallSize)

function setColorOfBall() {
    var colorOfBallValue = document.getElementById("colorofball").value;
    document.querySelector(".daire").style.backgroundColor = colorOfBallValue;
  }
  document.getElementById("colorofball").addEventListener("input", setColorOfBall);
  
  function setBackgroundColor() {
    var bgColorValue = document.getElementById("bgcolor").value;
    document.querySelector(".qutu").style.backgroundColor = bgColorValue;
  }
  document.getElementById("bgcolor").addEventListener("input", setBackgroundColor);

//   burani silmemeliyem
function moveLeft() {
    var daire = document.querySelector(".daire");
    var daireWidth = parseInt(getComputedStyle(daire).getPropertyValue("width"), 10);
    daire.style.left = (daire.offsetLeft - daireWidth) + "px";
  }
  
  document.getElementById("sol").onclick = moveLeft;

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
  // TEREFLER TEREFLER TEREFLER 
  function moveDown() {
    var daire = document.querySelector(".daire");
    daire.style.top = (daire.offsetTop + 1) + "px";
  }
  document.getElementById("alt").onclick = moveDown;

  function moveUp() {
    var daire = document.querySelector(".daire");
    daire.style.top = (daire.offsetTop - 1) + "px";
  }
  document.getElementById("ust").onclick = moveUp;
  
  function moveLeft() {
    var daire = document.querySelector(".daire");
    daire.style.left = (daire.offsetLeft - 1) + "px";
  }
  document.getElementById("sol").onclick = moveLeft;
  
  function moveRight() {
    var daire = document.querySelector(".daire");
    daire.style.left = (daire.offsetLeft + 1) + "px";
  }
  
  document.getElementById("sag").onclick = moveRight;
// TEREFLER TEREFLER TEREFLER 
// TEREFLER TEREFLER TEREFLER 22222222222
function moveLeftUp() {
  moveLeft();
  moveUp();
}
function moveLeftDown() {
  moveLeft();
  moveDown();
}
function moveRightUp() {
  moveRight();
  moveUp();
}
function moveRightDown() {
  moveRight();
  moveDown();
}
// TEREFLER TEREFLER TEREFLER 22222222222
//  reset yazmisam ortalamasi ucun ama bunu aktiv edende steps islemir 
// function resetPositionDeaktiv() {
//   var daire = document.querySelector(".daire");
//   daire.style.left = "50%";
//   daire.style.top = "50%";
// }
// document.getElementById("orta").onclick = resetPosition;

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


  
  // const stepsInput = document.querySelector('#steps');
// const pultButtons = document.querySelectorAll('.pult button');

// for (let i = 0; i < pultButtons.length; i++) {
//   pultButtons[i].onclick = function() {
//     const steps = parseInt(stepsInput.value);
//     if (Number.isInteger(steps) && steps > 1) {
//       for (let j = 0; j < steps - 1; j++) {
//         this.click();
//       }
//     }
//   }
// }
// bu kod islemedi bilmirem niye 