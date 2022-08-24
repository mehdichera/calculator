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
  num2="";
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
function pointfun(e){
  if(screen.textContent.includes(".")=== true){
    return false;
  }
  else{
    screen.textContent+=e.target.innerText;
  }
}
function deletefun(){
  let x = screen.textContent.split('');
  if (result.textContent ===""&& x.includes(" ") === true){
  x.splice(0,5);
  x.splice(-1,1);
  let screenContent = x.join("");
  screen.textContent=screenContent;
}
else if (result.textContent ===""&& x.includes(" ") === false){
  x.splice(-1,1);
  let screenContent = x.join("");
  screen.textContent=screenContent;
}
else if (result.textContent!==""&& x.includes(" ") === true){
  let y = result.textContent.split('');
  y.splice(0,5);
  y.splice(-1,1);
  let screenContent = y.join("");
  result.textContent=screenContent;
}
else{
 let y = result.textContent.split('');
  y.splice(-1,1);
  let screenContent = y.join("");
  result.textContent=screenContent; 
}
}
function keyBoard(e){  
if (e.key === "0"||e.key === "1"||e.key === "2"||e.key === "3"||e.key === "4"||e.key === "5"||e.key === "6"||e.key === "7"||e.key === "8"||e.key === "9"){
  result.textContent="";
  screen.textContent+=e.key;
}
else if(e.key === "+"||e.key === "-"||e.key === "*"||e.key ==="/"){
  if(num === ""){
    num = (+screen.textContent);
    operator =e.key;
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
    operator = e.key;
  }
  else{
    operator = e.key;
  }
}
else if(e.key === "="){
equal();
}
else if(e.key === "."){
  if(screen.textContent.includes(".")=== true){
    return false;
  }
  else{
    screen.textContent+=e.key;
  }
}
else if(e.key === "Backspace"){
deletefun();
}
else if(e.key === "Escape"){
  clear();
}
}
function operations(){
  let buttons = document.querySelectorAll(".number");
  let operators = document.querySelectorAll(".operator");
  let equalbtn = document.querySelector(".equal");
  let clearbtn = document.querySelector(".clear");
  let pointbtn = document.querySelector(".point");
  let deletebtn = document.querySelector(".delete");
  buttons.forEach(function(item){
    item.addEventListener('click',display)
  });
  operators.forEach(function (item){
    item.addEventListener('click',operatorsfuns)
  });
  equalbtn.addEventListener('click',equal);
  clearbtn.addEventListener('click',clear);
  pointbtn.addEventListener('click',pointfun);
  deletebtn.addEventListener('click',deletefun);
  document.addEventListener('keydown',keyBoard);
}
operations();

