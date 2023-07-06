function uniquePairs(nums, sum) {

    let finalArray = [];

    for (let i = 0; i < nums.length; i++) {

       let currentEl = Number(nums[i]);

    for (let j = i + 1; j < nums.length; j++) {

        let nextEl = Number(nums[j]);

        if(currentEl + nextEl === Number(sum)){
            finalArray.push(currentEl, nextEl)
            console.log(finalArray.join(' '));
            finalArray = [];
            
        }
    }
    }
    

}
uniquePairs([1, 2, 3, 4, 5, 6],
    6
    
    );