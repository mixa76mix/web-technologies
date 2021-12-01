"strict mode";

// Наследование классом-функцией

console.log(`Function inheritance`)

// Родитеьский класс
let Hero = function(name) {
	this.name = name;
	this.hp = 100;
	this.mp = 0;
	this.str = 1;
	this.dex = 1;
	this.int = 1;
}

Hero.prototype.get_name = function() {
	return(this.name);
}

Hero.prototype.get_hp = function() {
	return(this.hp);
}

Hero.prototype.get_mp = function() {
	return(this.mp);
}

Hero.prototype.get_heal = function(heal) {
	this.hp += heal;
}

Hero.prototype.get_damage = function(damage) {
	this.hp -= damage;
}

Hero.prototype.take_damage = function(obj) {
	if ("get_damage" in obj) {
		obj.get_damage(this.str);
	}
}

let main = new Hero("Mixa");
console.log(`${main.get_name()} - ${main.get_hp()}hp, ${main.get_mp()}mp`);

let dummy = new Hero("Dummy");
console.log(`${dummy.get_name()} - ${dummy.get_hp()}hp, ${dummy.get_mp()}mp`);
main.take_damage(dummy);
console.log(`Main damage dummy`)
console.log(`${dummy.get_name()} - ${dummy.get_hp()}hp, ${dummy.get_mp()}mp`);


// Дочерний класс
class Warrion extends Hero{
	str = 5;

	take_damage(obj) {
		if ("get_damage" in obj) {
			obj.get_damage(this.str);
		}
	}
}

let war = new Warrion("Acs");
war.take_damage(dummy);
console.log(`Warrion damage dummy`)
console.log(`${dummy.get_name()} - ${dummy.get_hp()}hp, ${dummy.get_mp()}mp`);


// Прототипное наследование
// 1-ый дочерний класс
let Wizard = function(name) {
	Hero.call(this, name);
	this.mp = 100;
}

// Выдает ошибку, что нет таких функций
//console.log(`${wiz.get_name()} - ${wiz.get_hp()}hp, ${wiz.get_mp()}mp`);

console.log(`Prototypal inheritance`);

console.log(`Before create`);
console.log(`Wizard.prototype == Hero: ${Object.getPrototypeOf(Wizard.prototype) == Hero.prototype}`);
// Установить наследование
Wizard.prototype = Object.create(Hero.prototype);
console.log(`After create`)
console.log(`Wizard.prototype == Hero: ${Object.getPrototypeOf(Wizard.prototype) == Hero.prototype}`);

Wizard.prototype.get_regen = function(regen) {
	this.mp += regen;
}

Wizard.prototype.selfheal = function() {
	this.hp += 10;
	this.mp -= 10;
}

let wiz = new Wizard("Mia");
console.log(`${wiz.get_name()} - ${wiz.get_hp()}hp, ${wiz.get_mp()}mp`);
wiz.selfheal();
console.log(`${wiz.get_name()} heals herself!`);
console.log(`${wiz.get_name()} - ${wiz.get_hp()}hp, ${wiz.get_mp()}mp`);


// 2-ой дочерний класс
let Healer = function(name) {
	Wizard.call(this, name);
}

console.log(`Before create`);
console.log(`Healer.prototype == Hero: ${Object.getPrototypeOf(Healer.prototype) == Hero.prototype}`);
console.log(`Healer.prototype == Wizard: ${Object.getPrototypeOf(Healer.prototype) == Wizard.prototype}`);
// Установить наследование
Healer.prototype = Object.create(Hero.prototype);
console.log(`After create`);
console.log(`Healer.prototype == Hero: ${Object.getPrototypeOf(Healer.prototype) == Hero.prototype}`);
console.log(`Healer.prototype == Wizard: ${Object.getPrototypeOf(Healer.prototype) == Wizard.prototype}`);
// Изменить предка
Object.setPrototypeOf(Healer.prototype, Wizard.prototype);
console.log(`After setPrototypeOf`);
console.log(`Healer.prototype == Hero: ${Object.getPrototypeOf(Healer.prototype) == Hero.prototype}`);
console.log(`Healer.prototype == Wizard: ${Object.getPrototypeOf(Healer.prototype) == Wizard.prototype}`);

Healer.prototype.heal = function(obj) {
	if ("get_heal" in obj) {
		obj.get_heal(10);
		this.mp -= 10;
	}
}

let hl = new Healer("Mio");
console.log(`${hl.get_name()} - ${hl.get_hp()}hp, ${hl.get_mp()}mp`);
console.log(`${main.get_name()} - ${main.get_hp()}hp, ${main.get_mp()}mp`);
hl.heal(main);
console.log(`${hl.get_name()} heals ${main.get_name()}!`);
console.log(`${hl.get_name()} - ${hl.get_hp()}hp, ${hl.get_mp()}mp`);
console.log(`${main.get_name()} - ${main.get_hp()}hp, ${main.get_mp()}mp`);


// Наследование классов
console.log(`Class inheritance`);

class Fountain {
	
	constructor(healpower = 10, uses = 5)
	{
		this.healpower = healpower;
		this.uses = uses;
	}

	get_uses() {
		return(this.uses);
	}

	heal(obj) {
		if ("get_heal" in obj) {
			obj.get_heal(this.healpower);
			this.uses -= 1;
		}
	}
}

let fnt = new Fountain();
console.log(`Fountain uses - ${fnt.get_uses()}`);
console.log(`${wiz.get_name()} - ${wiz.get_hp()}hp, ${wiz.get_mp()}mp`);
fnt.heal(wiz);
console.log(`${wiz.get_name()} is healed by Fountain!`);
console.log(`Fountain uses - ${fnt.get_uses()}`);
console.log(`${wiz.get_name()} - ${wiz.get_hp()}hp, ${wiz.get_mp()}mp`);


class MagicFountain extends Fountain {
	constructor(healpower = 20, regenpower = 10, uses = 2)
	{
		super(healpower, uses)
		this.regenpower = regenpower;
	}

	heal(obj) {
		if ("get_heal" in obj) {
			obj.get_heal(this.healpower);
			this.uses -= 1;
		}
		if ("get_regen" in obj) {
			obj.get_regen(this.regenpower);
		}
	}
}

let mfnt = new MagicFountain();
console.log(`MagicFountain uses - ${mfnt.get_uses()}`);
mfnt.heal(wiz);
console.log(`${wiz.get_name()} is healed by MagicFountain!`);
console.log(`MagicFountain uses - ${mfnt.get_uses()}`);
console.log(`${wiz.get_name()} - ${wiz.get_hp()}hp, ${wiz.get_mp()}mp`);


// Свойства
console.log(`Properties`);
let dict = {};

Object.defineProperty(dict, "arg1", {
	value: "writable?",
	writable: true,
	enumerable: true,
	configurable: true
});

console.log(dict.arg1);
dict.arg1 += " true";
console.log(dict.arg1);

Object.defineProperty(dict, "arg2", {
	value: "writable?",
	writable: false,
	enumerable: true,
	configurable: true
});

console.log(dict.arg2);
dict.arg2 += " no";
console.log(dict.arg2);


class Tower{

	constructor(name, hp = 100) {
		this.name = name;
		this.hp = hp;
		this.stat = "normal";
	}

	get_hp() {
		return(this.hp);
	}

	set status(damage) {
		if (damage < this.hp) {
			this.hp -= damage;
			this.stat = "normal";
		}
		else {
			this.hp = 0;
			this.stat = "destroyed";
		}
	}

	get status(){
		return this.stat;
	}
}

let t1 = new Tower("T1");
console.log(`Before damage - ${t1.status}, ${t1.hp}hp`);
t1.status = 25;
console.log(`After 1st damage - ${t1.status}, ${t1.hp}hp`);
t1.status = 80;
console.log(`After 2nd damage - ${t1.status}, ${t1.hp}hp`);

Object.defineProperty(t1, 'guardian', {
	enumerable: true,
	configurable: true,
	set: function(num) {
		this.hp += num*50;
		this.guard = num;
	},
	get: function() {
		return this.guard;
	}
});

console.log(`Before add guardian - ${t1.guardian} guardians, ${t1.hp}hp`);
t1.guardian = 5
console.log(`Before add guardian - ${t1.guardian} guardians, ${t1.hp}hp`);


// Новый метод у String
console.log(`New string method`);
String.prototype.quotes = function() {
	return `"${this}"`;
}

let str = "My string!";
console.log(`Before my method: ${str}`);
console.log(`After my method: ${str.quotes()}`);


// Приватные свойства
console.log(`Private properties`);
class Treasure {
	#gold;

	constructor()
	{
		this.status = "closed";
		this.#gold = 1000;
		console.log(`${this.#gold} in ${this.status} treasure`);
	}
}

let tr = new Treasure();
console.log(`${tr.gold} in ${tr.status} treasure`);


// Mixin
let printhpMixin = {
	printhp() {
		console.log(`${this.name} has ${this.hp}hp`);
	}
};

Object.assign(Hero.prototype, printhpMixin);
main.printhp();


let randMixin = Base => class extends Base 
{
	printrand() 
	{
		console.log(this.n + Math.random())
	}
};

class BaseClass { 
	constructor(n = 0) {
		this.n = n 
	}
}

class NewClass extends randMixin(BaseClass) { }
let obj = new NewClass(5);
obj.printrand();

