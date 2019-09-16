function arrayPacking(a) {
    return parseInt(a.reverse().map((v, i) => {
        let vb = v.toString(2);
        return '0'.repeat(8 - vb.length) + vb;
    }).join(''), 2);
}