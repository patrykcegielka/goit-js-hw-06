let colorValueSpan=document.querySelector(".color");
let changeColorBtn=document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function changeColor(){
  let currentColor=getRandomHexColor();
  document.querySelector("body").style.backgroundColor=currentColor;
  colorValueSpan.textContent=currentColor;
};

changeColorBtn.addEventListener("click",changeColor);



//Napisz skrypt, który zmienia kolor tła elementu <body> poprzez style inline po kliknięciu na button.change-color i wprowadza wartość koloru do span.color.

//Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.