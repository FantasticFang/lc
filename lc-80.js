/**
 * @param {number[]} nums
 * @return {number}
 */
// 三指针法
var removeDuplicates = function(nums) {
  let k = 0
  for (let i = 1, j = 0; i < nums.length; i++) {
    if (nums[k] !== nums[i]) {
      k++
      j = i
      nums[k] = nums[i]
    } else if (nums[k] === nums[i] && i - j < 2) {
      k++
      nums[k] = nums[i]
    } else if (nums[k] === nums[i] && i - j >= 2) {
      // nothing to do
    }
  }
  return k + 1
};