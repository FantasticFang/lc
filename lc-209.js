/**
209. Minimum Size Subarray Sum

Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.


Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
 

Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).
 */


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
/** 
自己想法的滑动窗口：
1. 初步分析：先扩大窗口
2. 达到target的要求后，进行窗口滑动
3. 滑动的过程中，发现值大于target时，是否考虑缩小窗口？如何缩小窗口？从左边还是右边？
*/
// o(n)
var minSubArrayLen = function(target, nums) {
  let res = 0
  let i = 0
  let length = 0 // 窗口长度
  let sum = 0
  
  while (i + length < nums.length) {
    // 扩大窗口&初始化窗口
    if (sum < target) {
      sum += nums[i + length]
      length++
    }
    if (sum >= target) {
      res = length
      break
    }
  }
  
  while (res && i + length <= nums.length) {
    if (sum >= target) {
      res = length
    }
    // 尝试窗口缩小
    while (sum > target) {    
      sum -= nums[i + length - 1]
      length--
    }
    // 滑动窗口
    if (i + length < nums.length) {
      sum -= nums[i]
      sum += nums[i + length]
    }
    i++
  }
 
  return res
};

// 滑动窗口标准写法
var minSubArrayLen = function(target, nums) {
  let res = 0
  let start = 0
  let end = 0
  let sum = 0
 
  while (start < nums.length) {
    if (sum < target && end < nums.length) {
      sum += nums[end]
      end++
    }
    if (sum >= target || end === nums.length){
      if (sum >= target && (end - start < res || !res)) {
        res = end - start
      } 
      sum -= nums[start]
      start++
    }
  }
  
  return res
};

minSubArrayLen(11, [1,2,3,4,5])