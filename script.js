function validateForm() {
  // Obtener valores de los campos
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;

  // Limpiar errores previos
    document.getElementById("firstNameError").innerText = "";
    document.getElementById("lastNameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("messageError").innerText = "";

  // Validar First Name
    if (firstName === "") {
        document.getElementById("firstNameError").innerText = "First Name is required.";
        isValid = false;
    }

  // Validar Last Name
    if (lastName === "") {
        document.getElementById("lastNameError").innerText = "Last Name is required.";
        isValid = false;
    }

  // Validar Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").innerText = "E-mail is required.";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid e-mail address.";
        isValid = false;
    }

  // Validar Phone
  const phoneRegex = /^[0-9]{10}$/; // 10 dígitos numéricos
    if (phone === "") {
        document.getElementById("phoneError").innerText = "Phone number is required.";
        isValid = false;
    } else if (!phoneRegex.test(phone)) {
        document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number.";
        isValid = false;
    }

  // Validar Message
    if (message === "") {
        document.getElementById("messageError").innerText = "Message is required.";
        isValid = false;
    }

  // Evitar envío si no es válido
return isValid;
}


/*selecciona el boton */
const btnUp = document.getElementById('btn-up');

/*se añade un evento al boton al hacer click se ejecutara la funcion scroll al top 0*/
btnUp.addEventListener('click', () => {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
});
