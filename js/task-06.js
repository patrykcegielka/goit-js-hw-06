let input=document.querySelector('[data-length="6"]');

let inputValueLength=input.dataset.length;

function checkValueInput() {
  if (input.value.classListlength==inputValueLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    return
  }
  input.classList.remove("valid");
  input.classList.add("invalid");
};

input.addEventListener("blur",checkValueInput);


//Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie blur) sprawdza jego zawartość na prawidłową liczbę wprowadzonych symboli.
//Informacja o liczbie symboli, która powinna znajdować się w polu input, pokazuje się w jego atrybucie data-length.
//Jeśli wprowadzono odpowiednią liczbę symboli, to border pola input staje się zielone, a jeśli liczba jest nieprawidłowa - czerwone.
//Aby dodać style, używaj klas CSS valid i invalid, które już dodaliśmy do plików źródłowych zadania.
