/**
15. 3Sum
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 
Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105

 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 暴力解法，超时
var threeSum = function (nums) {
  const res = []
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const tmpRes = [nums[i], nums[j], nums[k]]
          const string = tmpRes.sort().toString()
          
          if (!map[string]) {
            res.push(tmpRes)
            map[string] = true
          }
        }
      }
    }
  }
  
  return res
};

threeSum([34,55,79,28,46,33,2,48,31,-3,84,71,52,-3,93,15,21,-43,57,-6,86,56,94,74,83,-14,28,-66,46,-49,62,-11,43,65,77,12,47,61,26,1,13,29,55,-82,76,26,15,-29,36,-29,10,-70,69,17,49])

// 先排序，再使用双指针方法
var threeSum = function (nums) {
  nums.sort((a, b) => a - b) // n * log(n)
  const res = []
  
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) { // 去重
      continue
    }
    let left = i + 1, right = nums.length - 1 // left的起点为何是i + 1？因为i之前的元素，已经在第一层for循环中被遍历过了，也就是包含i&三数之和等于0的元素已经被挑出来了
    while (left < right) {
      if (nums[left] + nums[right] < -nums[i] || (left > i + 1 && nums[left] === nums[left - 1])) { // 数值偏小 || 有重复元素
        left++
        continue
      }
      if (nums[left] + nums[right] > -nums[i] || (right < nums.length - 1 && nums[right] === nums[right + 1])) { // 数值偏大 || 有重复元素
        right--
        continue
      }
      
      if (nums[left] + nums[right] === -nums[i]) {
        res.push([nums[i], nums[left], nums[right]])
        
        left++
        right--
      }
    }
  }
  
  return res
};

threeSum([34,55,79,28,46,33,2,48,31,-3,84,71,52,-3,93,15,21,-43,57,-6,86,56,94,74,83,-14,28,-66,46,-49,62,-11,43,65,77,12,47,61,26,1,13,29,55,-82,76,26,15,-29,36,-29,10,-70,69,17,49])
