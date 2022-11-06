const userInput = document.getElementById("userInput");
var expression = '';

function press(num){
    expression += num;
    userInput.value = expression;
}

function equal(){
    // необходимо заменить функцию eval а также сделать замену оперторов друг другом
    userInput.value = eval(expression);
    expression = '';
}

function erase(){
    expression = '';
    userInput.value = expression;
}