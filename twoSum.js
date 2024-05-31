// Problem Statement
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to the target. You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example
// Let's say we have the following input:

// nums = [2, 7, 11, 15]
// target = 9
// Explanation
// In this example, we need to find two numbers in the array nums that add up to target.

// We start by looking at the first number in the array, which is 2.
// We need another number that, when added to 2, equals 9. So we need 9 - 2 = 7.
// We then look through the rest of the array to find 7.
// We find that 7 is present at index 1 in the array.
// So, the indices of the two numbers that add up to the target 9 are 0 and 1.

// Result
// The function should return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9.

function twoSum(array , target){
    let temp=[];
    for(let i=0; i<array.length;i++){
        for(let j=i+1; j<array.length;j++){
            if(array[j] === target - array[i]){
                temp.push(i,j);
                return temp;
            }
        }
    }
    return temp;
}
const result=twoSum([2, 7, 11, 15],9);
console.log(result);