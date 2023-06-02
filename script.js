function showAlert() {alert("¡Hola esta es una alerta desde JavaScript!");
}

//Encuentra el boton HTML (el boton)mediante su ID
const miboton = document.getElementById ("miboton");
//Define la funcion que se ejecutara cuando se haga click en el boton 
function handleClick () {
    alert ("¡Hola! Haz hecho click en el boton!");
}
//Agrega un oyente de eventos para escuchar el click del boton
miboton.addEventListener('click', handleClick);

//un oyente de eventos al formulario para manejar el evento “submit”:
const form = document.getElementById('myForm');


form.addEventListener('submit', function(event) {
event.preventDefault();
validateForm();
});

//Sumar una función de validación que verifique los criterios deseados:
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
    }
    function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
    } else {
    alert('Correo electrónico enviado correctamente.');
    }
    }
    //Aquí la función “validateEmail()” indica que el mail contenga un “@” y un “.” para ser valido

document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {  
   
document.querySelector(".nav-links").
classList.toggle("nav-links-responsive")})
