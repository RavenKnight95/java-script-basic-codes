function arraysDemo(arr) {

    let resultArray = [];

    for (let i = 0; i < arr.length; i++) {
        let isBigger = true;
        let currentNumber = arr[i];

        for (let k = i + 1; k < arr.length; k++) {

            if (currentNumber <= arr[k]) {
                isBigger = false;
            }
        }
        if (isBigger) {
            resultArray.push(arr[i]);
        }
    }

    console.log(resultArray.join(' '));

    // let array = [];
    // let arrayLength = numbers.length;
    // let secondNumber = 0;

    // for (let firstInteger = 0; firstInteger < arrayLength; firstInteger++) {

    //     let firstNumber = numbers[firstInteger]
    //     let secondNumber = numbers[firstInteger + 1]

    //     if (firstNumber > secondNumber) {
    //         array += firstNumber
    //     } else {
    //         array+=firstNumber
    //     }

    // }
    // console.log(array);
}
arraysDemo([41, 41, 34, 20]);