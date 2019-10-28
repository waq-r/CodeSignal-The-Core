function isSumOfConsecutive2(n) {
    const arr = [...Array(Math.ceil(n * 0.6)).keys()];
    let r = 0;
    for (var s = 2; s < 130; s++) {
        for (var i = 1; i < arr.length - s + 1; i++) {
            if (arr.slice(i, i + s).reduce((a, v) => a + v, 0) === n) {
                r++;
            }
        }
    }
    return r;
}