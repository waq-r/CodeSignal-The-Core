function replaceMiddle(arr) {
    const i = arr.length / 2;
    return arr.length & 1 ? arr : arr.slice(0, i - 1).concat(arr[i] + arr[i - 1], arr.slice(i + 1));
}