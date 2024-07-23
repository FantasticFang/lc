// 135. Candy
/**
There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.

 

Example 1:

Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
Example 2:

// 思路
关键词在于neighbors，所有元素，在neighbors的排名，只有第一、第二、第三，三种情况
1. 先确定neighbors中最小的那个，赋值candy = 1

Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.

Constraints:

n == ratings.length
1 <= n <= 2 * 104
0 <= ratings[i] <= 2 * 104
 */

/**
 * @param {number[]} ratings
 * @return {number}
 */

// 思路是ok的，但是有一个case超时
var candy = function (ratings) {
  const n = ratings.length;
  const candies = []
  let undistributed = n
  let i = 0
  let sum = 0
  
  
  while (undistributed > 0) {
    let current = ratings[i];
    let left = i - 1 >= 0 ? ratings[i - 1] : Number.MAX_SAFE_INTEGER
    let right = i + 1 < n ? ratings[i + 1] : Number.MAX_SAFE_INTEGER
    
    if (candies[i]) {
      i = ++i % n
      continue
    }
    
    if (current <= left && current <= right) { // 最小的情况（可能包含边界）
      candies[i] = 1
      undistributed--
    } else if (current > left && current > right) { // 最大的情况
      if (candies[i - 1] && candies[i + 1]) {
        candies[i] = Math.max(candies[i - 1], candies[i + 1]) + 1
        undistributed--
      }
    } else { // 中间的情况（可能包含边界）
      if (current > left && candies[i - 1]) {
        candies[i] = candies[i - 1] + 1
        undistributed--
      } else if (current > right && candies[i + 1]) {
        candies[i] = candies[i + 1] + 1
        undistributed--
      }
    }
    
    if (candies[i]) {
      sum += candies[i]
    }
    
    i = ++i % n
  }
  
  return sum
}


var candy = function (ratings) {
  const n = ratings.length;
  const candies = []
  function getCandy(i) {
    if (i < 0 || i >= n) {
      return
    }
    if (candies[i]) {
      return candies[i]
    }

    let current = ratings[i];
    let left = i - 1 >= 0 ? ratings[i - 1] : Number.MAX_SAFE_INTEGER
    let right = i + 1 < n ? ratings[i + 1] : Number.MAX_SAFE_INTEGER

    if (current <= left && current <= right) { // 最小的情况（可能包含边界）
      candies[i] = 1 
    } else if (current > left && current > right) { // 最大的情况，该条件可排除边界
      candies[i] = Math.max(getCandy(i - 1), getCandy(i + 1)) + 1
    } else { // 中间的情况
      if (current > left) {
        candies[i] = getCandy(i - 1) + 1
      } else if (current > right) {
        candies[i] = getCandy(i + 1) + 1
      }
    }
    
    return candies[i]
  }
  
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += getCandy(i)  
  }
  
  return sum
}

candy([1,0,2])