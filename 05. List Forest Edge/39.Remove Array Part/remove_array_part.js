function removeArrayPart(inputArray, l, r) {
    return inputArray.filter((e, i) => (i < l || i > r) ? true : false);
}