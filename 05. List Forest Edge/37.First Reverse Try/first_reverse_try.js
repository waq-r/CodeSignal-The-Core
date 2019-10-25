function firstReverseTry(arr) {
    
    const f = arr.shift();
    return [].concat(arr.pop(),arr, f).filter(Number);

}
