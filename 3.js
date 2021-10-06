function example(num) {
    return function innerfunc(numTwo) {
        return num + numTwo;
    }
}
const result = example(5)(2);
console.log(result);