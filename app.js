/* document.getElementById- метод объекта документ находит элемент по id.
   onclick- событие при клике на html документ.
   Когда считываем какие либо значения из html неважно числовое или другое,
   оно всегда считывается как строка и поэтому нужно их привести к числу Number.*/

/*Константы */
const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplicationBtn = document.getElementById('multiply');
const divisionBtn = document.getElementById('toshare');
let action = '';//переменная которая будет присваивать значения (+ - * /).
/*Действия при клике на кнопку.*/ 
plusBtn.onclick = function () { //при клике на кнопку присваивается значение функции.
   action = '+';
}
minusBtn.onclick = function () {
   action = '-';
}
multiplicationBtn.onclick = function () {
   action = '*';
}
divisionBtn.onclick = function () {
   action = '/';
}
/* */ 
 function printResult(result) {
    if (result < 0) {
       resultElement.style.color = 'black';
    } else {
       resultElement.style.color = 'white';
    }
    resultElement.textContent = result;
}

/**/ 
function computeNumbersWithAction(inp1, inp2, actionSimbol){  //имя параметров
   const num1 = Number(inp1.value);//значение inp1
   const num2 = Number(inp2.value);//значение inp2
   if (actionSimbol == '+') {
      return num1 + num2;
   } else if (actionSimbol == '-'){
      return num1 - num2;
   } else if (actionSimbol == '*'){
      return num1 * num2;
   } else if (actionSimbol == '/'){
      return num1 / num2;
   }
}     
// Функция вычислить:
submitBtn.onclick = function () {
   const result = computeNumbersWithAction(input1, input2, action)  //аргументы
   printResult(result)

   // if (action == '+') {                                           
   //    const sum = Number(input1.value) + Number(input2.value);    
   //    printResult(sum);
   // } else if (action == '-') {
   //    const sum = Number(input1.value) - Number(input2.value);
   //    printResult(sum);
   // }
}