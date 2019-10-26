function isSmooth(arr) {
    const i = arr.length / 2;
    const middle = (arr.length % 2 === 0) ? (arr[i] + arr[i - 1]) : arr[Math.floor(i)];
    return arr[0] === middle && middle === arr.pop();
}