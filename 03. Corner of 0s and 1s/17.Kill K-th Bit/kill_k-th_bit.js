function killKthBit(n, k) {
    return parseInt(n.toString(2).split('').reverse().map((v, i) => {
        if (i === k - 1) {
            v = '0';
        }
        return v;
    }).reverse().join(''), 2);
}