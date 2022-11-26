let inputText = document.querySelector("#name-input");
let outputText = document.querySelector("#name-output");

let newInput = () => {
  outputText.innerHTML = `${inputText.value}`;
};
let newEmptyInput = () => {
  outputText.innerHTML = `Anonymous`;
};

inputText.addEventListener("input", () => {
    if (inputText.value == "") {
        newEmptyInput();
      } else {
        newInput();
      }
    });
  
 
//Napisz skrypt, który przy wpisywaniu tekstu w polu input input#name-input (zdarzenie input) wstawia jego aktualną wartość do span#name-output. Jeśli pole input jest puste, w spanie powinien wyświetlić się komunikat "Anonymous".