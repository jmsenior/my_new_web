<?php
$name = $_POST['name'];
$email = $_POST['email'];
$redirectURL = "http://www.jmvisualcreativity.es/demo"; 
$message = $_POST['message'];
$formcontent=" From: $name \n Message: $message";
$recipient = "info@jmvisualcreativity.es";
$subject = $_POST['subject'];
$mailheader = "From: $email \r\n";

	if (!mail($recipient, $subject, $formcontent, $mailheader) )
		{   echo '<script language="javascript">';
			echo 'alert("Error al enviar")';
			echo '</script>';}
	
	else 
		{ 
			echo '<script language="javascript">';
			echo 'alert("Mensaje enviado")';
			echo '</script>';
		
		
		 }	
	
?>
