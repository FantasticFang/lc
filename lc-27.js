/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let m = nums.length
  for (let i = 0; i < m; ) {
    if (nums[i] === val) {
      nums[i] = nums[m - 1]
      m--
    } else {
      i++
    }  
  }
  return m
};