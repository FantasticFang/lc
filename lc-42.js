/**
42. Trapping Rain Water
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 
Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
*/

/**
 * @param {number[]} height
 * @return {number}
 * 思想：一层一层的计算，先算第一层能够积攒多少水，然后再算第二层能够积攒多少水，直到最后一层
 * o(height * n)的时间复杂度，当height出现较高数值时，可能导致无法ac
 */
var trap = function(height) {
  let l = 0, r = height.length - 1
  let sum = 0
  let currentHeight = 1
  
  while (l <= r) {
    if (height[l] < currentHeight) {
      l++
      continue
    }
    if (height[r] < currentHeight) {
      r--
      continue
    }
    for (let i = l; i <= r; i++) {
      if (height[i] < currentHeight) {
        sum++
      }
    }
    currentHeight++
  }
  
  return sum
};


/**
 * @param {number[]} height
 * @return {number}
 * 思想：一列一列计算，每一列能够收集到的雨滴数，是根据左右墙的最大高度得来，求出左边墙的最大值，右边墙的最大值；根据木桶效应，能够收集到的雨滴数，就是左右墙中较小的那个墙的高度减去当前列的高度
 * 时间复杂度o(n2)，超时喽
 */
var trap = function (height) {
  let n = height.length
  let sum = 0
  for (let i = 0; i < n; i++) {
    lMax = 0, rMax = 0
    for (let left = 0; left < i; left++) {
      lMax = Math.max(lMax, height[left])
    }
    for (let right = i + 1; right < n; right++) {
      rMax = Math.max(rMax, height[right])
    }

    let water = Math.min(lMax, rMax) - height[i]
    if (water > 0) {
      sum += water 
    }
  }
  
  return sum
}

/**
 * @param {number[]} height
 * @return {number}
 * 思想：按列收集，但使用空间换时间，先求出左右最大值，再计算每一列能够收集到的雨滴数
 * 时间复杂度o(n)，空间复杂度o(n)
 */
var trap = function (height) {
  let n = height.length
  let sum = 0
  
  const leftMaxMap = []
  function getLeftMax(i) {
    if (i === 0) {
      return 0
    }
    if (leftMaxMap[i]) {
      return leftMaxMap[i]
    }
    leftMaxMap[i] = Math.max(getLeftMax(i - 1), height[i - 1]) // 实际上是由递归实现循环
    return leftMaxMap[i]
  }
  const rightMaxMap = []
  function getRightMax(i) {
    if (i === n - 1) {
      return 0
    }
    if (rightMaxMap[i]) {
      return rightMaxMap[i]
    }
    rightMaxMap[i] = Math.max(getRightMax(i + 1), height[i + 1]) // 实际上是由递归实现循环
    return rightMaxMap[i]
  }
  for (let i = 0; i < n; i++) {
    let water = Math.min(getLeftMax(i), getRightMax(i)) - height[i]
    if (water > 0) {
      sum += water 
    }
  }
  
  return sum
}

/**
 * @param {number[]} height
 * @return {number}
 * 时间复杂度o(n)，空间复杂度o(1)
 * 动态规划优化版本、使用左右双指针
 */
var trap = function (height) {
  let n = height.length
  let sum = 0
  let leftMax = 0
  let rightMax = 0
  
  for (let left = 0, right = n - 1; left < right;) {
    
  }
}


/**
 * @param {number[]} height
 * @return {number}
 * 单调栈
 * 时间复杂度o(n)，空间复杂度o(n)
 * Input: height = [4,2,0,3,2,5]
 * Output: 9
 */
var trap = function (height) {
  let n = height.length
  let sum = 0
  let i = 0
  
  const stack = []
  
  while (i < n) {
    if (stack.length === 0 || height[stack[stack.length - 1]] >= height[i]) {
      stack.push(i)
      i++ // 入栈后，再更新下一个元素
    } else {
      let currentIndex = stack.pop()
      let heightDiff = Math.min(height[stack[stack.length - 1]], height[i]) - height[currentIndex]
      if (stack.length && heightDiff > 0) {
        sum += (i - stack[stack.length - 1] - 1) * heightDiff
      }
    }
  }
  
  return sum
}

trap([0,1,0,2,1,0,1,3,2,1,2,1])
