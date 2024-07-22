/**
 * 
代码
测试用例
测试结果
测试结果
134. Gas Station
中等
相关标签
相关企业
There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

Example 1:

Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.

思路：
1   3   6   10  15
3   7   12  13  15
-2 -4   -6  -3  0
 */

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// 比较直接的算法，超时。时间复杂度o(n2)
var canCompleteCircuit = function(gas, cost) {
  let length = gas.length

  for(let i = 0; i < length; i++) {
    if(gas[i] >= cost[i]) { // 具备当做起点的条件
      let j = 0
      let sumGas = 0
      let sumCost = 0
      while(j < length) {
        sumGas += gas[(i + j) % length]
        sumCost += cost[(i + j) % length]
        if(sumGas < sumCost) {
          i = j
          break
        }
        j++ 
      }
      if(j === length) {
        return i
      }
    }
  }

  return -1
};


var canCompleteCircuit = function(gas, cost) {
  let length = gas.length
  let total = 0
  let current = 0
  let start = 0

  for(let i = 0; i < length; i++) {
    total += gas[i] - cost[i]
    current += gas[i] - cost[i]

    if(current < 0) { // 说明此路不通
      current = 0
      start = i + 1
    }
  }

  if (total >= 0) {
    return start % length
  }

  return -1
};