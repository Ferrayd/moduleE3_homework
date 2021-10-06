function isPrime(num) {
    if (num == 0 || num == 1) {
        return "1 и 0 не являются простыми числами"
    }
    else if (num > 1 && num <=1000){
    for (i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  }
  else {
      return "Данные не верны"
  }
}
