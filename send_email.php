<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los valores del formulario
    $name = $_POST["validationName"];
    $lastName = $_POST["validationLastName"];
    $email = $_POST["validationEmail"];
    $message = $_POST["validationMessage"];

    // Aquí puedes agregar cualquier validación adicional que necesites

    // Configurar el destinatario del correo
    $to = "b.alexis.mtz.a@gmail.com";

    // Asunto del correo
    $subject = "Formulario de contacto - Mi sitio web";

    // Contenido del correo
    $emailContent = "Nombre: $name $lastName\n";
    $emailContent .= "Correo electrónico: $email\n";
    $emailContent .= "Mensaje:\n$message";

    // Cabeceras del correo
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Enviar el correo
    mail($to, $subject, $emailContent, $headers);
}
?>
