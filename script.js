"strict mode";

function var_vs_let() {
    {
        var a = 1;
        let b = 0;
    }
    console.log(a);
    //console.log(b); // Ошибка: b is not defined
}
var_vs_let();


// Строгое равенство
let strict_eq = function(a, b) {
    if (a === b)
        return "True";
    else
        return "False";
}

// Нестрогое равенство
let not_strict_eq = function(a, b) {
    if (a == b)
        return "True";
    else
        return "False";
}

// Проверка равенств
let a = 1;
let b = "1";

let res = strict_eq(a, b);
console.log("Strict " + res); // False

res = not_strict_eq(a, b);
console.log("Not strict " + res); // True


globalThis["arr"] = [1, "2", 3, "4", 5, 6, "7"]

let exp2 = x => x*x; 
let exp2rand = x => x*x*Math.random(); 

let fors = function() {
    let sum = 0;
    let sumrand = 0;
    for(let i = 0; i < 5; i++){
        sum = sum + exp2(i);
        sumrand = sumrand + exp2rand(i);
    }
    console.log("for1 " + sum);
    console.log("for1rand " + sumrand);

    sum = 0;
    sumrand = 0;
    for(let i of arr) {
        if (typeof(i) == "number") {
            sum = sum + exp2(i);
            sumrand = sumrand + exp2rand(i);
        }
    }
    console.log("for2 " + sum);
    console.log("for2rand " + sumrand);

    sum = 0;
    sumrand = 0;
    let dict = {"a": 1, "b": 2, "c": 3};
    for(let i in dict) {
        sum = sum + exp2(dict[i]);
        sumrand = sumrand + exp2rand(dict[i]);
    }
    console.log("for3 " + sum);
    console.log("for3rand " + sumrand);
}
fors();


let array = function() {
    return [2, 3, 5];
}

let arr2 = array();
console.log(arr2); // Массив

[x, y, z] = arr2;
console.log(x); // 3 числа
console.log(y);
console.log(z);
