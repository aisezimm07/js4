function calc() {
    let number = prompt("Введите число:");
    let result = 1;
  
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
  
    return result;
  }
  
  let factorial = calc();
  console.log(factorial);
 



  
  function elem(arr1, arr2) {
    let elem2 = [];
  
    for (let element of arr1) {
      if (arr2.includes(element)) {
        elem2.push(element);
      }
    }
  
    return elem2;
  }
  
  let array1 = [1, 2, 3, 4, 5];
  let array2 = [3, 4, 5, 6, 7];
  let elemarr = elem(array1, array2);
  console.log(elemarr);





  function element(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  let pr = prompt("Введите 2 число:");
  let number = Number(pr);
  
  if (element(number)) {
    console.log(number + "является простым числом.");
  } else {
    console.log(number + " составное число");
  }








  function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();