/*==== FORMULARIO DE CONTACTO ===*/
//Get the elements of the contact form by Id
const contactForm = document.getElementById("contactForm");

const inputName = document.getElementById("inputName");
const alert_name = document.getElementById("alert_name");
const alert_name_txt = document.getElementById("alert_name_txt")

const inputPhone = document.getElementById("inputPhone");
const alert_phone = document.getElementById("alert_phone");
const alert_phone_txt = document.getElementById("alert_phone_txt");

const inputEmail = document.getElementById("inputEmail");
const alert_email = document.getElementById("alert_email");
const alert_email_txt = document.getElementById("alert_email_txt");

const inputMessage = document.getElementById("inputMessage");
const alert_message = document.getElementById("alert_message");
const alert_message_txt = document.getElementById("alert_message_txt");

const btnSend = document.getElementById("btnSend")

const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-][^\d]{2,50}/;
const phoneRegex = /^[0-9]{10}$/;
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const messageRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'0-9]{10,500}/;

let isValid;
let isName;
let isPhone;
let isEmail;
let isMessage;

// Sweetalert
function alertWrong() {
    swal("Invalid nformation!", "Some data is incorrect", "error");
}

function alertSuccess() {
    swal("Message sent!", "I will contact you as soon as possible", "success");
}

function validationName() {

    // Deleting spaces and out UpperCase
    let name = String(inputName.value.trim().toUpperCase());


    // Cleaning validation elements
    inputName.style.border = "";
    alert_name.style.display = "none";
    alert_name_txt.innerHTML = "";

    if (nameRegex.test(name)) {
        inputName.style.border = "solid 2px green";
        return true
    } else {
        inputName.style.border = "solid 2px rgb(186, 3, 3)";
        alert_name.style.display = "flex";
        alert_name_txt.insertAdjacentHTML("afterbegin", `Incorrect name`);
        return false;
    }
}

inputName.addEventListener("change", function (element) {
    element.preventDefault();
    validationName();
})


function validationPhone() {
    // Deleting spaces
    let phone = inputPhone.value.trim();
    // Cleaning validation elements 
    inputPhone.style.border = "";
    alert_phone.style.display = "none";
    alert_phone_txt.innerHTML = "";

    // count to add repeated digits
    let repeatedDigits = 0;
    // if repeatedDigits
    for (i = 0; i < phone.length; i++) {
        if (phone.charAt(i) == phone.charAt(i + 1)) {
            repeatedDigits++;
        }
    }
    // regexPhone & repeatedDigits <= 5
    if (phoneRegex.test(phone) && (repeatedDigits <= 5)) {
        inputPhone.style.border = "solid 2px green";
        return true
    } else {
        inputPhone.style.border = "solid 2px rgb(186, 3, 3)";
        alert_phone.style.display = "flex";
        alert_phone_txt.insertAdjacentHTML("afterbegin", `Incorrect phone number`);
        return false;
    }
}

inputPhone.addEventListener("change", function (element) {
    element.preventDefault();
    validationPhone();
})

function validationEmail() {
    // Deleting spaces and LowerCase
    let email = inputEmail.value.trim().toLowerCase();
    // Cleaning validation elements 
    inputEmail.style.border = "";
    alert_email.style.display = "none";
    alert_email_txt.innerHTML = "";

    if (emailRegex.test(email)) {
        inputEmail.style.border = "solid 2px green";
        return true;
    } else {
        inputEmail.style.border = "solid 2px rgb(186, 3, 3)";
        alert_email.style.display = "flex";
        alert_email_txt.insertAdjacentHTML("afterbegin", `Incorrect e-mail`);
        return false;
    }
}

inputEmail.addEventListener("change", function (element) {
    element.preventDefault();
    validationEmail();
})


function validationMessage() {
    // Deleting spaces
    let message = inputMessage.value.trim().length;
    // Cleaning validation elements 
    inputMessage.style.border = "";
    alert_message.style.display = "none";
    alert_message_txt.innerHTML = "";

    if (message > 10) {
        inputMessage.style.border = "solid 2px green";
        return true;
    } else {
        inputMessage.style.border = "solid 2px rgb(186, 3, 3)";
        alert_message.style.display = "flex";
        alert_message_txt.insertAdjacentHTML("afterbegin", `Incorrect message`);
        return false;
    }
}

inputMessage.addEventListener("change", function (element) {
    element.preventDefault();
    validationMessage();
})

btnSend.addEventListener("click", function (event) {
    event.preventDefault();
    isName = validationName();
    isPhone = validationPhone();
    isEmail = validationEmail();
    isMessage = validationMessage();

    if (isName && isPhone && isEmail && isMessage) {
        alertSuccess();

        setTimeout(() => {
            contactForm.submit()
        }, 2000);

        inputName.value = "";
        inputPhone.value = "";
        inputPhone.value = "";
        inputMessage.value = "";

    } else {
        alertWrong();
    }
});
