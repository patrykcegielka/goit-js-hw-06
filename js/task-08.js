let loginForm=document.querySelector(".login-form");
let emailInput=document.querySelector('[name="email"]');
let passwordInput=document.querySelector('[name="password"]');
let submitBtn=document.querySelector('button[type="submit"]');

class User {
  constructor(email,password) {
    this.email=email;
    this.password=password;
  }
};

function createAndShowUserObject(email,password){
   userObject=new User(email,password);
  console.log(userObject);
};

function handlingForm(evt){
  evt.preventDefault();
  if (!emailInput.value||!passwordInput.value) {
    alert("all items should be completed!!");
    return
  };
  createAndShowUserObject(emailInput.value,passwordInput.value);
  loginForm.reset()
};

loginForm.addEventListener("submit",handlingForm);


//Opracowanie przesyłania formularza form.login-form powinno przebiegać zgodnie ze zdarzeniem submit.
//Podczas przesyłania formularza strona nie powinna się restartować.
//Jeśli w formularzu są nieuzupełnione pola, wprowadź alert z upomnieniem o tym, że wszystkie pola powinny zostać wypełnione.
//Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, zbierz wartość pól jako obiekt, gdzie nazwa pola będzie nazwą właściwości, a wartość pola - wartością właściwości. Aby otrzymać dostęp do elementów formularza użyj właściwości elements.
//Umieść obiekt z wprowadzonymi danymi do wiersza poleceń i wyczyść wartości pól formularza metodą reset.