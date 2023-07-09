function getSumFunc(num1) {
    return function(num2) {
      return num1 + num2;
    };
  }
  const num1 = 5;
  const num2 = 10;
  
  const sumFunc = getSumFunc(num1);
  const sum = sumFunc(num2);
  
  console.log(sum);