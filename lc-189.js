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
  k = k % length
  for(let i = 0; i < k; i++) {
    const last = nums[length - 1]
    for(let j = length - 1; j > 0; j--) {
      nums[j] = nums[j - 1]
    }
    nums[0] = last
  }
};

// o(n)时间复杂度、o(n)空间复杂度
var rotate = function(nums, k) {
  const length = nums.length
  // k可能是一个很大的值
  k = k % length
  const tmp = []
  // copy
  for(let i = 0; i < k; i++) {
    tmp[i] = nums[length - k + i]
  }
  // 更换位置
  for(let i = 0; i < length - k; i++) {
    nums[length - 1 - i] = nums[length - 1 - i - k]
  }
  // 赋值 
  for(let i = 0; i < k; i++) {
    nums[i] = tmp[i]
  }
}

// o(n)时间复杂度、o(1)空间复杂度 
function reverse(nums, start, end) {
  let tmp
  while (start < end) {
    tmp = nums[start]
    nums[start] = nums[end]
    nums[end] = tmp
    start++
    end--    
  }
}

var rotate = function(nums, k) { 
  const length = nums.length
  k = k % length
  reverse(nums, 0, length - 1)
  reverse(nums, 0, k -1)
  reverse(nums, k, length - 1)
}
