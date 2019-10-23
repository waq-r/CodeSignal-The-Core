function countSumOfTwoRepresentations2(n, l, r) {
    let s = 0;
    for (var a = l; a <= r; a++) {
        let b = n - a;
        if (b >= l && b <= r && b >= a) {
            s++;
        }
    }
    return s;
}