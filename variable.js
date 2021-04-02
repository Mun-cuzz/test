'use strict'


function calculate(command, a, b){
let result;
 
  if(command ==='+'|'add'){
    result = a+b;
  console.log('result: ${result}');}

  else if(command ==='-'|'subtract'){
    result = a-b;
    console.log('result: ${result}');}

    else if(command ==='*'|'multiply'){
    result=a*b;
    console.log('result: ${result}');}

    else if(command ==='/'|'divide'){
    result= a/b;
      if(result===0){
        result='0';}
  console.log('result: ${result}');}

    else if(command ==='%'|'remainder'){
    result = a%b;
    console.log('result: ${result}');}

      else {
      console.log('result: Wrong command!');}
  }

  calculate('add', 1, 3);
calculate('-', 1, 3);
calculate('multiply', 1, 3);
calculate('/', 4, 2);
calculate('%', 5, 3);
calculate(']', 1, 3);