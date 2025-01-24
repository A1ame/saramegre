<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	// Получаем данные из формы
	$name = strip_tags(trim($_POST["name"]));
	$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
	$message = trim($_POST["message"]);

	// Проверяем данные на валидность
	if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
		// Если данные невалидны, возвращаем ошибку
		http_response_code(400);
		echo "Пожалуйста, заполните форму корректно.";
		exit;
	}

	// Указываем email, на который будут приходить сообщения
	$recipient = "sobachka1236@gmail.com"; // Замените на ваш email

	// Указываем тему письма
	$subject = "Новое сообщение от $name";

	// Формируем содержимое письма
	$email_content = "Имя: $name\n";
	$email_content .= "Email: $email\n\n";
	$email_content .= "Сообщение:\n$message\n";

	// Формируем заголовки письма
	$email_headers = "From: $name <$email>";

	// Отправляем письмо
	if (mail($recipient, $subject, $email_content, $email_headers)) {
		// Если письмо отправлено успешно
		http_response_code(200);
		echo "Спасибо! Ваше сообщение отправлено.";
	} else {
		// Если произошла ошибка при отправке
		http_response_code(500);
		echo "Упс! Что-то пошло не так, и мы не смогли отправить ваше сообщение.";
	}

} else {
	// Если запрос не POST, возвращаем ошибку
	http_response_code(403);
	echo "Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.";
}
?>