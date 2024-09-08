const twoSum = function (nums, target) {
    let numToIndex = {}

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if (numToIndex.hasOwnProperty(complement)) {
            return [numToIndex[complement], i];
        }
        numToIndex[nums[i]] = i;
    }
    return numToIndex;
};

console.log(twoSum([2, 7, 11, 15], 9)); // Output [0,1]
console.log(twoSum([3, 2, 4], 6)); // Output [1,2]
console.log(twoSum([3, 3], 6)); // Output [0,1]

