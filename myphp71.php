<?php
$name = htmlspecialchars($_POST['name']);
$mail  = htmlspecialchars($_POST['mail']);
$school  = htmlspecialchars($_POST['school']);
$type  = htmlspecialchars($_POST['type']);

echo "<div>Ваше имя: {$name}\n</div>";
echo "<div>Ваша почта: {$mail}\n</div>";
echo "<div>Желаемая школа: {$school}\n</div>";
echo "<div>Формат школы: {$type}\n</div>";
?>
