// 189. Rotate Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Input: nums = [1,2,3,4,5,6,7], k = 3


// Output: [5,6,7,1,2,3,4]
// o(n2)的时间复杂度，运行超时
var rotate = function(nums, k) {
  const length = nums.length
  for(let i = 0; i < k; i++) {
    const last = nums[length - 1]
    for(let j = length - 1; j > 0; j--) {
      nums[j] = nums[j - 1]
    }
    nums[0] = last
  }
};