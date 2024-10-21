/**
11. Container With Most Water
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1
 */


/**
 * @param {number[]} height
 * @return {number}
 */
// 暴力深度遍历，超时。增加空间，进行判断之后依然超时
var maxArea = function(height) {
  let max = 0
  const res = {}
  
  function getMax(left, right) {
    if (res[`${left}-${right}`]) {
      return
    }
    res[`${left}-${right}`] = true  

    if (left >= right) {
      return
    }
    
    const store = Math.min(height[left], height[right]) * (right - left)
    if (store > max) {
      max = store
    }
    
    getMax(left + 1, right)
    getMax(left, right - 1)
  }
  getMax(0, height.length - 1)
  
  return max
};


var maxArea = function (height) {
  let left = 0, right = height.length - 1, max = 0
  while (left < right) {
    const store = Math.min(height[left], height[right]) * (right - left)
    if (store > max) {
      max = store
    }
    
    // 保持高的一面墙不动，寻找更高的墙，才有机会收集到更多的水
    if (height[left] > height[right]) {
      right--
    } else {
      left++
    }
  }
  
  return max
}
