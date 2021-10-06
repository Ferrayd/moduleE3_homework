function count(arr) {
    let countEven = 0;
    let countOdd = 0;
    let countZero = 0;
    for (i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) == true) {
            if (arr[i] == 0) {
                countZero += 1;
            }
            else if (!(arr[i] % 2)) {
                countEven += 1;
            }
            else {
                countOdd += 1;
            }
        }
        else {
            continue;
        }
    }
    return console.log(countEven, countOdd, countZero);
}
const a = [1, 5, 7, 8, 4, 3, 1, 2, 9, 0, 0, 0, 0, null, undefined];
count(a);