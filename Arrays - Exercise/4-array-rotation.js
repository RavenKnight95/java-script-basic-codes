function arraysDemo(arrayToRotate, rotations) {

    for(let index = 0; index < rotations; index++) {
        let numberToMove = arrayToRotate.shift();
        arrayToRotate.push(numberToMove);
    }

    console.log(arrayToRotate.join(' '));
}
arraysDemo([51, 47, 32, 61, 21], 2)