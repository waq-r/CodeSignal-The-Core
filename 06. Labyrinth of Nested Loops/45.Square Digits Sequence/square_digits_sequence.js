function squareDigitsSequence(a0) {
    let arr = [];
    let result = a0;
    while (!arr.includes(result)) {
        arr.push(result);
        result = arr[arr.length - 1].toString().split('').reduce((a, v) => a + (Number(v) * Number(v)), 0);
    }
    return arr.length + 1;
}