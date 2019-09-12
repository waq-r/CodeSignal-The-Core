function metroCard(lastNumberOfDays) {
    return (lastNumberOfDays === 28 || lastNumberOfDays === 30) ? [31] : [28, 30, 31];
}