let screen = document.querySelector(".screen");
let result = document.createElement("p");
let num = "";
let num2 = "";
let operator = "";
function add (num,num2){
  let result = num + num2;
  return result;
}
function subtract (num,num2){
  let result = num - num2;
  return result;
}
function multiply (num,num2){
  let result = num * num2;
  return result;
}
function divide (num,num2){
  if(num2 === 0){
    return "error";
  }
  else{
  let result = num / num2;
  return result.toFixed(2);
}
}
function operate (num,operator,num2){
  if (operator == "+"){
  return add (num,num2);
  }
  else if (operator == "-") {
  return subtract (num,num2);
  }
  else if (operator == "*") {
  return multiply (num,num2);
  }
  else {
  return divide (num,num2);
};
}
function equal(){
  num2 = (+screen.textContent);
  if(num === ""|| num2 === ""|| operator === ""){
    return false;
  }
  else if(result.textContent!==""){
    num2 = "";
    return false;
  }
  else{
  screen.textContent="";
  let value = operate(num,operator,num2);
  result.textContent =value;
  screen.appendChild(result);
  num = "";
  num2 = "";
}
}
function clear(){
  num2 = "";
  num = "";
  operator = "";
  screen.textContent="";
  result.textContent ="";
}
function display(e){
  result.textContent="";
  screen.textContent+=e.target.innerText;
}
function operatorsfuns(e){
  if(num === ""){
    num = (+screen.textContent);
    operator =e.target.innerText;
    screen.textContent = "";
  }
  else if(num !==""&& result.textContent ===""){
    num2 = (+screen.textContent);
    screen.textContent=""
    let value = operate(num,operator,num2);
    result.textContent =value;
    screen.appendChild(result);
    num = value;
    num2 = "";
    operator = e.target.innerText;
  }
  else{
    operator = e.target.innerText;
  }
}
function operations(){
  let buttons = document.querySelectorAll(".number");
  let operators = document.querySelectorAll(".operator");
  let equalbtn = document.querySelector(".equal");
  let clearbtn = document.querySelector(".clear");
  buttons.forEach(function(item){
    item.addEventListener('click',display)
  });
  operators.forEach(function (item){
    item.addEventListener('click',operatorsfuns)
  });
  equalbtn.addEventListener('click',equal);
  clearbtn.addEventListener('click',clear);
}
operations();
