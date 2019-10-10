function lineUp(commands) {

    let sameDirection = true;
    let count = 0;

    for (var i = 0; i < commands.length; i++) {

        if (commands[i] == 'A') {
            if (sameDirection === true) {
                count += 1;
            }
        } else {
            if (sameDirection === false) {
                count += 1;
                sameDirection = true;
            } else {
                sameDirection = false;
            }
        }
    }

    return count;
}
