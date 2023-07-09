function countEvenOdd(arr) {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      if (arr[i] === 0) {
        zeroCount++;
      } else if (arr[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  }

  console.log("Количество четных элементов: " + evenCount);
  console.log("Количество нечетных элементов: " + oddCount);
  console.log("Количество нулевых элементов: " + zeroCount);
}

// Пример использования
const array = [1, 2, 3, null, 4, 0, "five"];
countEvenOdd(array);