    
    //funcion para la animacion de las imagenes
    const images = document.querySelectorAll('.table-img');
    images.forEach(image => {
        image.classList.add('img-responsive');
    });
    
    /*let validationName = document.getElementById("validationName");
    let validationLastName = document.getElementById("validationLastName");
    let validationEmail = document.getElementById("validationEmail");
    let validationMessage = document.getElementById("validationMessage");
    let btnSend = document.getElementById("btnSend");

    btnSend.addEventListener("click", function (event) {
        event.preventDefault();
        let isValid = true;

        // Limpia los bordes y mensajes de error
        validationName.style.border = "";
        validationLastName.style.border = "";
        validationMessage.style.border = "";
        validationEmail.style.border = "";

        const alertValidaciones = document.getElementById("alertValidaciones");
        const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
        alertValidacionesTexto.innerHTML = "";
        alertValidaciones.style.display = "none";

        // Aplica trim a los campos
        validationName.value = validationName.value.trim();
        validationLastName.value = validationLastName.value.trim();
        validationMessage.value = validationMessage.value.trim();
        validationEmail.value = validationEmail.value.trim();

        // Longitud Name
        if (validationName.value.length < 3) {
            alertValidacionesTexto.insertAdjacentHTML("afterbegin", `
                El <strong>nombre</strong> no es correcto. Debe tener al menos 3 caracteres.<br/>`);
            alertValidaciones.style.display = "block";
            validationName.style.border = "solid thin red";
            isValid = false;
        }

        // Longitud LastName
        if (validationLastName.value.length < 3) {
            alertValidacionesTexto.insertAdjacentHTML("afterbegin", `
                El <strong>apellido</strong> no es correcto. Debe tener al menos 3 caracteres.<br/>`);
            alertValidaciones.style.display = "block";
            validationLastName.style.border = "solid thin red";
            isValid = false;
        }

        // Longitud Message
        if (validationMessage.value.length < 10) {
            alertValidacionesTexto.insertAdjacentHTML("afterbegin", `
                El <strong>mensaje</strong> es muy corto. Debe tener al menos 10 caracteres.<br/>`);
            alertValidaciones.style.display = "block";
            validationMessage.style.border = "solid thin red";
            isValid = false;
        }

        // Validar Email usando expresión regular
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(validationEmail.value)) {
            alertValidacionesTexto.insertAdjacentHTML("afterbegin", `
                El <strong>correo electrónico</strong> no es válido.<br/>`);
            alertValidaciones.style.display = "block";
            validationEmail.style.border = "solid thin red";
            isValid = false;
        }

        // Si todo es válido, se puede enviar el formulario
        if (isValid) {
            // Aquí puedes agregar código para enviar el formulario, si lo deseas.
            event.target.form.submit();
        }
    });*/


    function validateForm() {
        //regex para Name, LastName y Email
        const nameRegex = /^[a-zA-Z]+$/;
        const emailRegex = /^\S+@\S+\.\S+$/;
    
        //Obtener los elementos del formulario del HTML por su id
        const validationName = document.getElementById("validationName");
        const validationLastName = document.getElementById("validationLastName");
        const validationEmail = document.getElementById("validationEmail");
        const validationMessage = document.getElementById("validationMessage");
    
        // Aplica trim a los campos
        validationName.value = validationName.value.trim();
        validationLastName.value = validationLastName.value.trim();
        validationMessage.value = validationMessage.value.trim();
        validationEmail.value = validationEmail.value.trim();
    
        // Validar que el nombre tenga al menos 3 caracteres
        if (validationName.value.length < 3) {
            alert("El nombre debe tener al menos 3 caracteres.");
            return false;
        }
    
        // Validar que el apellido tenga al menos 3 caracteres
        if (validationLastName.value.length < 3) {
            alert("El apellido debe tener al menos 3 caracteres.");
            return false;
        }

        // Validar que el mensaje tenga al menos 10 caracteres
        if (validationMessage.value.length < 10) {
            alert("El mensaje debe tener al menos 10 caracteres.");
            return false;
        }
    
        // Validar el regex para el Name
        if (!nameRegex.test(validationName.value)) {
            alert("El nombre solo puede contener letras.");
            return false;
        }
    
        // Validar el regex para el LastName
        if (!nameRegex.test(validationLastName.value)) {
            alert("El apellido solo puede contener letras.");
            return false;
        }
    
        // Validar el regex para el Email
        if (!emailRegex.test(validationEmail.value)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return false;
        }
    
        // Si todos los campos son válidos, se envía el formulario.
        //Falta agregar la funcionalidad para que si se envie el mensaje al correo
        //b.alexis.mtz.a@gmail.com
        return true; 
    }
    





/*
    // Función para validar el formulario al momento de enviarlo
    function validateForm(event) {
        // Obtener el formulario
        const form = event.target;


         // Aplica trim a los campos
         validationName.value = validationName.value.trim();
         validationLastName.value = validationLastName.value.trim();
         validationMessage.value = validationMessage.value.trim();
         validationEmail.value = validationEmail.value.trim();

         

        // Validar si el formulario es válido
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        // Añadir la clase 'was-validated' para mostrar los estilos de validación
        form.classList.add('was-validated');
    }

    // Obtener el formulario
    const form = document.querySelector('.needs-validation');

    // Escuchar el evento de envío del formulario
    form.addEventListener('submit', validateForm, false);*/


    