let counterDisplay = document.querySelector("#value");

let decrementCounter = document.querySelector('[data-action="decrement"]');
let incrementCounter = document.querySelector('[data-action="increment"]');

let counterValue = parseInt(counterDisplay.innerText);
 
updateDisplay();


decrementCounter.addEventListener("click" , () => {
    counterValue--;
    updateDisplay();
})

incrementCounter.addEventListener("click" , () => {
    counterValue++;
    updateDisplay();
})

function updateDisplay() {
    counterDisplay.innerHTML = counterValue;
  }
//Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i inicjalizuj wartość 0.
//Dodaj click listeners do przycisków, wewnątrz których zwiększaj i zmniejszaj wartość licznika.
//Aktualizuj interfejs nową wartością zmiennej counterValue.