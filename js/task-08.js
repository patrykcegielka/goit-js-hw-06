const form = document.querySelector('form');

const submitForm = (event) => {
    event.preventDefault();

    const emailValue = form.elements.email.value;
    const passwordValue = form.elements.password.value;

    if (!emailValue || !passwordValue) {
        alert('All fields must be filled')
    } else {
   
        const userData = {
            email: emailValue,
            password: passwordValue
        };

        console.log(userData);

        form.reset();
    }
}
form.addEventListener('submit', submitForm);


//Opracowanie przesyłania formularza form.login-form powinno przebiegać zgodnie ze zdarzeniem submit.
//Podczas przesyłania formularza strona nie powinna się restartować.
//Jeśli w formularzu są nieuzupełnione pola, wprowadź alert z upomnieniem o tym, że wszystkie pola powinny zostać wypełnione.
//Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, zbierz wartość pól jako obiekt, gdzie nazwa pola będzie nazwą właściwości, a wartość pola - wartością właściwości. Aby otrzymać dostęp do elementów formularza użyj właściwości elements.
//Umieść obiekt z wprowadzonymi danymi do wiersza poleceń i wyczyść wartości pól formularza metodą reset.