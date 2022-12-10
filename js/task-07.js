let slider = document.getElementById("font-size-control");
let text = document.getElementById("text");

slider.value = 16;
slider.addEventListener("input", () => {
  let size = slider.value;
  text.style.fontSize = size + "px";
});

//Napisz skrypt, który reaguje na zmianę wartości input#font-size-control (zdarzenie input) i zmienia styl inline span#text aktualizując właściwość font-size. W rezultacie, podczas przeciągania paska przesuwania będzie zmieniał się rozmiar tekstu.