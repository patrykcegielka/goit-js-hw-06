let inputForm = document.getElementById("validation-input");
let attributeValue = inputForm.getAttribute("data-length");
let validInput = () => {
  inputForm.classList.add("valid");
  inputForm.classList.remove("invalid");
};
let invalidInput = () => {
  inputForm.classList.add("invalid");
  inputForm.classList.remove("valid");
};
inputForm.addEventListener("blur", () => {
  if (parseInt(attributeValue) === inputForm.value.trim().length) {
    validInput();
  } else {
    invalidInput();
  }
});

//Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie blur) sprawdza jego zawartość na prawidłową liczbę wprowadzonych symboli.
//Informacja o liczbie symboli, która powinna znajdować się w polu input, pokazuje się w jego atrybucie data-length.
//Jeśli wprowadzono odpowiednią liczbę symboli, to border pola input staje się zielone, a jeśli liczba jest nieprawidłowa - czerwone.
//Aby dodać style, używaj klas CSS valid i invalid, które już dodaliśmy do plików źródłowych zadania.
