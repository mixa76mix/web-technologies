// 1.	Использовать SVG для выполнения ДЗ
let el = document.documentElement;
console.log(`${el.nodeName}`);

// 2.	Создание элемента
let new_el = document.createElement("newdiv");
console.log(`${new_el.nodeName}`);

// 3.	Получение элемента по селектору
let el_sel = document.querySelector("g");
console.log(`${el_sel.nodeName}`);

// 5.	Навигация по DOM
// 30.	Получение элемента по ID
let my_div = document.getElementById("layer2");
console.log(`my div: ${my_div.nodeName}`);

// Родитель
let parent_div = my_div.parentNode;
console.log(`parent: ${parent_div.nodeName}`);

// Потомки
// 17.	Узлы-потомки
let child_div = my_div.childNodes[0];
console.log(`1st child-1: ${child_div.nodeName}`); 
// #text
// childNodes[1] - comment

// 20.	Элементы-потомки
let child_div2 = my_div.children[0];
console.log(`1st child-2: ${child_div2.nodeName}`); 
// linearGradient

// 4.	Добавление нового элемента
// 14.1	Изменение HMTL в текстовом виде
// 24.	Добавить перед элементом
let newpath = `<a>text</a> <path
       id="path594"
       style="display:inline;fill:url(#linearGradient4150);fill-opacity:1;stroke:#000000;stroke-width:0.277529px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 184.88896,24.251946 c -14.44176,14.475984 -26.81002,21.616761 -39.37882,38.445099 -12.5688,16.828338 -19.84844,34.250388 -27.12032,51.085195 5.23987,2.68106 13.77161,2.98466 19.01149,5.66571 12.82498,-13.20534 24.10499,-26.834443 32.43722,-42.404466 8.33224,-15.570024 15.12483,-35.425297 15.77448,-52.698059 0.18196,-0.936866 -0.22428,-0.352349 -0.72405,-0.09348 z m -23.75841,33.099039" />`

new_el.innerHTML = newpath; // Тег появится c содержимым, но не отображается
parent_div.insertBefore(new_el, my_div);

// 6.	Создание фрагмента документа
let fragment = document.createDocumentFragment();

// 14.2	Изменение HMTL в текстовом виде
let new_el_2 = document.createElement("newdiv2");
new_el_2.innerText = `<a>text</a> ${newpath}`; // Тег появится без содержимого, т.к. SVG

let new_el_txt = document.createElement("text");
new_el_txt.innerText = `<text>text</text> ${newpath}`; // Тег тоже появится без содержимого

// 28.	Добавление фрагмента документа
let text1 = document.createElement("text");
text1.innerHTML = ` text1 `;
fragment.appendChild(text1);

let text2 = document.createElement("text");
text2.innerHTML = ` text2 `;
fragment.appendChild(text2);

fragment.appendChild(new_el_2);
fragment.appendChild(new_el_txt);
my_div.appendChild(fragment);


// 26.	Нормализация содержимого 
// 27.	Добавление текстового узла
let newtextel = document.createElement("text");

newtext = document.createTextNode("txt1");
newtext2 = document.createTextNode("txt2");

newtextel.appendChild(newtext);
newtextel.appendChild(newtext2);

my_div.appendChild(newtextel);

newtextel.normalize();

// 25.	Удалить элемент из DOM
document.getElementById("layer6").remove();


// 7.	Манипуляция атрибутами
let lefteye = document.getElementById("path1250");
lefteye.style = "fill:#880202";

// 8.	Удаление атрибута
let righteye = document.getElementById("path1250-8");
righteye.removeAttribute("style");

// 9.	Установка атрибута
lefteye.setAttribute("stroke", "blue");
lefteye.setAttribute("stroke-width", "1px");


// 10.	Установка класса
leftear = document.getElementById("path5947-0");
rightear = document.getElementById("path5947-9");

leftear.classList.add("ear");
leftear.classList.add("leftear");
rightear.classList.add("ear");
rightear.classList.add("rightear");
// Или то же самое
// rightear.classList = "ear rightear";
console.log(rightear.classList);

if(leftear.classList.contains("ear"))
	console.log("leftear has class ear - True")
else
	console.log("leftear has class ear - False")


// 12.	Проверка наличия класса
if (leftear.hasAttribute("class") && rightear.hasAttribute("class"))
	console.log("path5947-0 and path5947-9 have class ear - True")
else
	console.log("path5947-0 and path5947-9 have class ear - False")

// 11.	Удаление класса
leftear.classList.remove("ear");

// 32.	Переключение класса
rightear.classList = "rightear";

if(rightear.classList.contains("ear"))
	console.log("rightear has class ear - True")
else
	console.log("rightear has class ear - False")

// 13.	Установка ID
leftear.id = "earleft";

if(leftear.id = "earleft")
	console.log("leftear has id earleft - True")
else
	console.log("leftear has id earleft - False")

// 16.	Переход к предыдущему узлу
console.log(righteye.previousSibling.nodeName);

// 18.	Переход к следующему элементу
console.log(righteye.nextElementSibling.nodeName);

// 19.	Переход к предыдущему элементу
console.log(righteye.previousElementSibling.nodeName);


// 21.	Добавить первым в элемент
let my_div2 = document.getElementById("defs2");
let new_el_begin = document.createElement("begin");
my_div2.insertBefore(new_el_begin, my_div2.children[0]);

// 22.	Добавить последним в элемент
let new_el_end = document.createElement("end");
my_div2.appendChild(new_el_end);

// 23.	Добавить в середину элемента
let new_el_mid = document.createElement("mid");
my_div2.insertBefore(new_el_mid, my_div2.children[2]);

// 29.	Пример использования namespace
var glist = document.getElementsByTagNameNS("http://www.w3.org/2000/svg", "g");
var num = glist.length;
console.log("There are " + num + " g elements in this document");

// 31.	Псевдоселектор scope
let linglist = my_div2.querySelectorAll(".svg .ling");
console.log(glist.length); // 2
linglist = my_div2.querySelectorAll(":scope .svg .ling");
console.log(glist.length); // 0


/// События

// Для данных пунктов использую своего события
// 35.	Создание своего события
let my_event = document.createEvent("Event");

my_event.initEvent("my_event", true, true);

// 46.	Создание одиночного слушателя
leftear.addEventListener("my_event", function(event) {
	console.log(this.nodeName, this.id);
});

// 36.	Отправка своего события
leftear.dispatchEvent(my_event);


// 34.	Использование только событий прокрутки
// 37.	Проверка события на валидность
// 41.	Установка события
// 49.	Детектирование типа события
let scrollY = function (event) {
	console.log("Y: " + window.scrollY + " " + event.type);
}

window.addEventListener("scroll", scrollY);

// 43.	Удаление события
let scrollX = function (event) {
	console.log("X: " + window.scrollX);
}

window.addEventListener("scroll", scrollX);

window.removeEventListener("scroll", scrollX);


// 42.	Установка события-атрибута
let svg = document.getElementById("svg5");
svg.setAttribute("onscroll", "console.log(\"X2: \" + window.scrollX)");

// 44.	Замена события-атрибута
svg.setAttribute("onscroll", "console.log(\"X3: \" + window.scrollX)");

// 45.	Удаление события-атрибута через шорткат
let right = document.getElementById("layer2");
right.setAttribute("onscroll", "console.log(\"X4: \" + window.scrollX)");
right.onscroll = "";


// 38.	Предотвращение стандартного действия
let url = document.getElementById("url");
url.addEventListener("click", 
	function(event)
	{
		event.preventDefault();
	}
);


// Далее использовал событие click, чтобы можно проверить погружение и всплытие

// 39.	Предотвращение распространения
// 40.	Немедленное прекращение распространения
svg.setAttribute("onclick", "console.log(\"click svg0\")");

let left = document.getElementById("layer4");
left.addEventListener("click", function (event) {
	console.log("click left");
	event.stopImmediatePropagation();
	//event.stopPropagation();
});

// При stopImmediatePropagation НЕ будет вызван
// При stopPropagation будет вызван
left.addEventListener("click", function (event) {
	console.log("click left2");
	event.stopPropagation();
});

// 48.	Детектирование фазы события
let cl1 = function (event) {
	console.log(`Погружение ${this.nodeName}`);
}

let cl2 = function (event) {
	console.log(`Всплытие ${this.nodeName}`);
}

right.addEventListener("click", cl1, {capture: true});
right.addEventListener("click", cl2, {capture: false});

svg.addEventListener("click", cl1, {capture: true});
svg.addEventListener("click", cl2, {capture: false});


// 50.	Демонстрация бессмысленности passive capture
// Эти события идут после событий без passive
let cl12 = function (event) {
	console.log(`Погружение2 ${this.nodeName}`);
}

let cl = function (event) {
	console.log(`Событие2 ${this.nodeName}`);
}

let cl22 = function (event) {
	console.log(`Всплытие2 ${this.nodeName}`);
}

right.addEventListener("click", cl12, {passive: true, capture: true});
right.addEventListener("click", cl22, {passive: true, capture: false});

right.addEventListener("click", cl, {passive: true});
svg.addEventListener("click", cl, {passive: true});

svg.addEventListener("click", cl12, {passive: true, capture: true});
svg.addEventListener("click", cl22, {passive: true, capture: false});

