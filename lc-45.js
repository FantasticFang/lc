/**
45. Jump Game II
中等

You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
[2,4,2,1,4,1,1]
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].
startIndex: 0, 1, 1, 1, 2, 2, 2
previousValue: 2, 1, 0, 2 = nums[startIndex] - (i - startIndex), 1, 0, 2
current : 0 + 2, 1 + 4, 2 + 2, 3 + 1, 4 + 4, 5 + 1, 6 + 1
max: 2, 5, 5, 5, 8, 8, 8
step: 1, 1, 1, 2, 2, 2, 3

num[i] + i > max
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let previousValue = nums[0] // 存储当前步数能走的范围
  let step = 0
  let max = nums[0]
  let startIndex = 0
  for (let i = 1; i < nums.length; i++) {
    previousValue-- // 走一步减一步
    if (nums[i] + i > max) {
      max = nums[i] + i // 最优值
      startIndex = i
    }
    if (previousValue === 0 || i === nums.length - 1) { // 用完了步数，或者到达终点
      step++
      previousValue = nums[startIndex] - (i - startIndex) // 当前index时，最优值能覆盖的范围
    }
  }

  return step
};
