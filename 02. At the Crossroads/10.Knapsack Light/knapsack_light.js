function knapsackLight(value1, weight1, value2, weight2, maxW) {
    if (weight1 + weight2 <= maxW) {
        return value1 + value2;
    }
    if (value1 > value2 && weight1 <= maxW) {
        return value1;
    }
    if (value2 > value1 && weight2 <= maxW) {
        return value2;
    }
    if (weight1 <= maxW) {
        return value1;
    }
    if (weight2 <= maxW) {
        return value2;
    }
    return 0;
}