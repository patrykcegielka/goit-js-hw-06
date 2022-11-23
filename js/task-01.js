let listItems = document.querySelectorAll("#categories > li.item");
console.log("Number of categories: " + listItems.length);
listItems.forEach((element) => {
  console.log("Category: " + element.querySelector("h2").innerText);
  console.log("Elements: " + element.querySelectorAll("li").length);
});

//Napisz skrypt, który:

//Policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, czyli elementy li.item.
//Dla każdego elementu li.item na liście ul#categories, znajdzie i wprowadzi do wiersza poleceń tekst nagłówka elementu (tag <h2>) i liczbę elementów w kategorii (wszystkich <li>).
