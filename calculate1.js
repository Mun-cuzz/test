'use strict'


function calculate(command, a, b){

  let result;

  //('add'||'+') 이렇게 있을 때 앞에 있는 것만 인식해요...ㅠㅠ

  /* command === ('add'||'+')에서 'add'||'+'는 'add' 또는 '+'를 의미하지 않아요.
    이러한 표현은 '논리 연산자를 이용한 단축 평가'라고 합니다.
    keyword1 || keyword2 가 있고, keyword1이 true, keyword2가 false라고 해봅시다.
    그렇다면 이 연산의 값은 true가 되고, 이 연산의 값을 결정한 첫번째 피연산자가 return이 됩니다.
    
    이것을 'add'||'+'의 경우에 적용해봅시다.
    'add'와 '+'는 빈 문자열('')이 아니기 때문에 true 값에 대응됩니다.
    그렇기 때문에 결과적으로 연산은 true를 return 하겠죠?
    그래서 단축평가에 의해서 연산의 결과를 결정한 첫번째 피연산자인 'add'를 return하게 됩니다.

    순서를 바꿔보면 '+'||'add'에서 '+'와 'add' 모두 true 값이기 때문에
    단축평가에 의해서 연산의 결과를 결정한 첫번째 피연산자인 '+'를 return하게 되는거죠.
    
    그래서 command === ('+'||'add')라고 하면 단축평가에 의해서
    command === '+'과 같은 말이 되는 거에요.

    이것을 맞게 출력되도록 고쳐줄려면
    command === '+' || command === 'add'라고 써줘야됩니다.


    이해가 안 되면 멘토링 때 질문하면 다시 설명해주도록 하겠습니다.
    */


  if(command === '+' || command === 'add'){
    result = a+b;
    console.log('result:',result);
    // template literal을 이용하여 console.log(`result: ${result}`);로도 표현할 수 있습니다.
  }

  else if(command === '-' || command === 'subtract'){
    result = a-b;
    console.log('result:' ,result);
  }

  else if(command === 'multiply' || command === '*'){
    result=a*b;
    console.log('result:',result);
  }

  else if(command === '/' || command === 'divide'){
    result= a/b;
      if((result===0)){
        result='0';}
      // 여기서 언급한 0에 대한 처리는 b가 0인 경우를 말한 거 였어요.
      // 참고해서 나중에 다시 연습해보세요.
      console.log('result:',result);
    }

  else if(command === '%' || command === 'remainder'){
    result = a%b;
    console.log('result:',result);
  }

  else {
    console.log('result: Wrong command!');
  }
}


calculate('add', 1, 3);
calculate('-', 1, 3);
calculate('multiply', 1, 3);
calculate('/', 4, 2);
calculate('%', 5, 3);
calculate(']', 1, 3);


// 다양한 함수 선언(function expression, arrow function, IIFE)도 연습해보세요.
// 특히 function expression과 arrow function은 자주 쓰이기 때문에 익숙해지는 것이 좋아요.