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
  console.log('result: ${result}');}

    else if(command ==='%'|'remainder'){
    result = a%b;
    console.log('result: ${result}');}

      else {
      console.log('result: Wrong command!');}
  }
