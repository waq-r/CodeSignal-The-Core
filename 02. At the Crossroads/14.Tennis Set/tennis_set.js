function tennisSet(score1, score2) {
    let a = [score1, score2].sort();
    return a[1] === 7 && a[0] === 5 || a[1] === 7 && a[0] === 6 || a[1] === 6 && a[0] <= 4;
}