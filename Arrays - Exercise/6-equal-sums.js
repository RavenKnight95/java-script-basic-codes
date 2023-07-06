function uniquePairs(arr) {

    let foundIndex = 'no';
    let arrLength = arr.length

    for (let i = 0; i < arrLength; i++) {
        let leftSum = 0;
        let rightSum = 0;

        //calc left sum
        for (let l = 0; l < i; l++) {
            leftSum = leftSum + arr[l];
        }
        //calc right sum
        for (let r = i + 1; r < arrLength; r++) {
            rightSum = rightSum + arr[r]
        }
        if (leftSum === rightSum) {
            foundIndex = i;
        }

    }
    console.log(foundIndex);

}
uniquePairs([1, 2, 3, 3]);