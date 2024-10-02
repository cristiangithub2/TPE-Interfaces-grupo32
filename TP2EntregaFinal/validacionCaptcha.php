<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $secretKey = 'TU_CLAVE_SECRETA'; // Clave secreta de reCAPTCHA
    $captchaResponse = $_POST['g-recaptcha-response'];

    $url = 'https://www.google.com/recaptcha/api/siteverify';
    $data = array('secret' => $secretKey, 'response' => $captchaResponse);

    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data),
        ),
    );

    $context  = stream_context_create($options);
    $response = file_get_contents($url, false, $context);
    $result = json_decode($response);

    if ($result->success) {
        // Si reCAPTCHA es válido, procesa el formulario
        echo "Validación exitosa. Procesando el formulario.";
    } else {
        echo "Error en la validación del reCAPTCHA.";
    }
}
?>
