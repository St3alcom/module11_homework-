function checkPrimeNumber(number) {
    // Проверяем, что число не больше 1000
    if (number > 1000) {
      return "Данные неверны. Пожалуйста, введите число, которое не превышает 1000.";
    }
  
    // Проверяем числа 0 и 1
    if (number === 0 || number === 1) {
      return "Число не является простым.";
    }
  
    // Проверяем остальные числа
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return "Число не является простым.";
      }
    }
  
    return "Число является простым.";
  }
  console.log(checkPrimeNumber(7));    
  console.log(checkPrimeNumber(0));   
  console.log(checkPrimeNumber(1)); 
  console.log(checkPrimeNumber(1001)); 