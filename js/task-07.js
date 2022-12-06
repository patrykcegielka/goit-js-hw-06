const inputElement = document.getElementById("font-size-control");
const spanElement = document.getElementById("text");

let changeFontSize = (event) => { 
    let fontSize = event.target.value + "px";
    spanElement.style.fontSize = fontSize;
}

inputElement.addEventListener("input", changeFontSize);

//Napisz skrypt, który reaguje na zmianę wartości input#font-size-control (zdarzenie input) i zmienia styl inline span#text aktualizując właściwość font-size. W rezultacie, podczas przeciągania paska przesuwania będzie zmieniał się rozmiar tekstu.