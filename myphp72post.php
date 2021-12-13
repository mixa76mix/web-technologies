<?php
$num = (int)$_POST["num"];
$truenum = 76;

if ($num > 100 || $num < 1)
	echo "Твое число: $num - Ты вышел за пределы";
elseif ($num > $truenum)
	echo "Твое число: $num - Нет, меньше";
elseif ($num < $truenum)
	echo "Твое число: $num - Нет, больше";
else
	echo "Твое число: $num - Угадал!";
?>
