let inputRange=document.getElementById("font-size-control");
let spanText=document.getElementById("text");

function changeFontSize(){
  spanText.style.fontSize=inputRange.value+"px"
};

inputRange.addEventListener("input",changeFontSize);


//Napisz skrypt, który reaguje na zmianę wartości input#font-size-control (zdarzenie input) i zmienia styl inline span#text aktualizując właściwość font-size. W rezultacie, podczas przeciągania paska przesuwania będzie zmieniał się rozmiar tekstu.