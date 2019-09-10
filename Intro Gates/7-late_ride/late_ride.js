function lateRide(n) {
    return (Math.floor(n / 60).toString() + (n % 60)).toString().split('').reduce((a, v) => Number(a) + Number(v), 0);
}