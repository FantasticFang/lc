/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 双指针法-首尾指针
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

// 双指针法-快慢指针，其中i一定走的快于k
var removeElement = function (nums, val) {
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]
      k++
    }
  }
  return k
};

