function phoneCall(min1, min2_10, min11, s) {
    let m = 0;
    while (s > 0) {
        s -= min1;
        m += 1;
        if (min2_10 * 9 <= s) {
            s -= min2_10 * 9;
            m += 9;
        } else {
            m += s / min2_10;
            s -= (s / min2_10) * min2_10;
        }
        m += s / min11;
        s = 0;
    }
    return Math.floor(m);
}