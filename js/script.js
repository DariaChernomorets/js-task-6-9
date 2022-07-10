//Task 6

console.log(Boolean(Number('10')) + 1);

console.log ('sub ' + Number(false));

console.log(16  *  '      91    ');

console.log(true - 70);

console.log(Number(1 + String(1)) + 1);


//Task 7

// let hours = Number (prompt('How many hours to you want to transfer to seconds?'));
//
// const seconds = hours * 3600;
// alert(`${hours} hours = ${seconds} seconds`);

//Task 8

//1
let num = 1;

//2
// num = num + 12;
num += 12;

//3
// num = num - 14;
num -= 14;

//4
// num = num * 5;
num *= 5;

//5
// num = num / 7;
num /= 7;

//6
// num = num + 1;
++num;

//7
// num = num - 1;
--num;

// result
// alert(num);


//Task 9

//9.2 (Задачи с сайта)
//1. Чему будут равны переменные a, b, c и d в примере ниже
let a = 1, b = 1; // a = 2; b = 2;

let c = ++a; // 2
let d = b++; // 1

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//2. Чему будут равны переменные a и x после исполнения кода в примере ниже?
let a2 = 2;

let x = 1 + (a2 *= 2); // 1 + 2*2 = 5
console.log(x);

//3. Какой результат будет у выражений ниже?
/*
"" + 1 + 0 = 10 (string+ ==> string concatenation)
"" - 1 + 0 = -1
true + false = 1 (true = 1, false = 0)
6 / "3" = 2 (math operation, not + ==> string transformed to number)
"2" * "3" = 6 (math operation, not + ==> string transformed to number)
4 + 5 + "px" = 9px (math operation + add string)
"$" + 4 + 5 = $9 (string+ ==> string concatenation)
"4" - 2 = 2 (math operation, not + ==> string transformed to number)
"4px" - 2 = NaN (string - number = NaN)
"  -9  " + 5 = "  -9  5" (string+ ==> string concatenation)
"  -9  " - 5 = -14; (math operation, not + ==> string transformed to number)
null + 1 = 1  (null  transforming to number as 0)
undefined + 1 = NaN (undefined transforming to number as NaN)
" \t \n" - 2 = -2
*/

/*4. Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
В чём ошибка? Исправьте её. Результат должен быть 3.
*/

// let a3 = Number(prompt("Первое число?", 1));
// let b3 = Number(prompt("Второе число?", 2));

// alert(a3 + b3);

/* 9.3. Каким будет результат этих выражений?
5 > 4 = true
"ананас" > "яблоко" = false
"2" > "12" = false
undefined == null = true
undefined === null = false
null == "\n0\n" = false
null === +"\n0\n" = false
*/
