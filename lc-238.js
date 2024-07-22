/**
238. Product of Array Except Self
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:

Input: nums = [2,3,4,5]
left:  2 6  24 120
right: 5 20 60 120
res:  60 40 30 24
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const res = new Array(nums.length).fill(1);
  let left = 1, right = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] *= left;
    left *= nums[i];
    
    res[nums.length - i - 1] *= right;
    right *= nums[nums.length - i - 1];
  }
  
  return res
};