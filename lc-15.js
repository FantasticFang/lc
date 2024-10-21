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


// 
var threeSum = function (nums) {
  nums.sort((a, b) => a - b) // n * log(n)
  const map = {}
  const res = []
  
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1, right = nums.length - 1
    while (left < right) {
      if (left === i) {
        left++
        continue
      }
      if (right === i) {
        right--
        continue
      }
      if (nums[left] + nums[right] < -nums[i]) {
        left++
        continue
      }
      if (nums[left] + nums[right] > -nums[i]) {
        right--
        continue
      }
      
      if (nums[left] + nums[right] === -nums[i]) {
        const tmpRes = [nums[i], nums[left], nums[right]]
        const string = tmpRes.sort().join(',')
        
        if (!map[string]) {
          res.push(tmpRes)
          map[string] = true
        }
        
        left++
        right--
      }
    }
  }
  
  return res
};

threeSum([34,55,79,28,46,33,2,48,31,-3,84,71,52,-3,93,15,21,-43,57,-6,86,56,94,74,83,-14,28,-66,46,-49,62,-11,43,65,77,12,47,61,26,1,13,29,55,-82,76,26,15,-29,36,-29,10,-70,69,17,49])
