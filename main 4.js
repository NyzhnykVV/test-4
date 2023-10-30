const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true;
  }
  
  readline.question ('Введіть початкове число для відліку: ', (startNumber) => {
    readline.question('Введіть довжину масиву: ', (arrayLength) => {
      startNumber = parseInt(startNumber);
      arrayLength = parseInt(arrayLength);
      
      const primeNumbers = [];
      
      while (primeNumbers.length < arrayLength) {
        if (isPrime(startNumber)) {
          primeNumbers.push(startNumber);
        }
        startNumber++;
      }
     
      if (primeNumbers.length > 0) {
        const lastPrime = primeNumbers[primeNumbers.length - 1];
        console.log('Останнє просте число в масиві:', lastPrime);
      } else {
        console.log('У масиві немає простих чисел.');
      }
      
      readline.close();
    });
  });

  console.log(primeNumbers)