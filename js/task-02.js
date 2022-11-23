const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




const list = document.querySelector("#ingredients");
ingredients.forEach((element) => {
  let listItem = document.createElement("li");
  listItem.textContent = element;
  list.append(listItem);
  listItem.classList.add("item");

});

//Napisz skrypt, który dla każdego elementu tablicy ingredients:

//Utworzy oddzielny element <li>. Koniecznie użyj metody document.createElement().
//Doda nazwę elementu jako jego zawartość tekstową.
//Doda do elementu klasę item.
//Po czym umieści wszystkie <li> na liście podczas jednej operacji ul#ingredients.