'use strict'


function calculate1(command, a, b){
  let result;
    if((command === '+'||'add')){
    result = a+b;
    console.log('result:',result);}

      else {
      console.log('result: Wrong command!');}
}

  function calculate2(command, a, b){
    let result;  
    if((command ==='-'||'subtract')){
    result = a-b;
    console.log('result:' ,result);}

      else {
      console.log('result: Wrong command!');}
  }

  function calculate3(command, a, b){
    let result;
  
    if((command ==='*'||'multiply')){
    result=a*b;
    console.log('result:',result);}

      else {
      console.log('result: Wrong command!');}}
  

  function calculate4(command, a, b){
    let result;
    if((command ==='/'||'divide')){
    result= a/b;
      if((result===0)){
        result='0';}
      console.log('result:',result);}

        else {
        console.log('result: Wrong command!');}
    
  function calculate5(command, a, b){
    let result;
      if((command ==='%'||'remainder')){
    result = a%b;
    console.log('result:',result);}
    
        else {1
      console.log('result: Wrong command!');}

calculate1('add', 1, 3);
calculate2('-', 1, 3);
calculate3('multiply', 1, 3);
calculate4('/', 4, 2);
calculate5('%', 5, 3);
calculate1(']', 1, 3);