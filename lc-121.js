// 121. Best Time to Buy and Sell Stock
/**
 * @param {number[]} prices
 * @return {number}
 */
// [7,1,5,3,6,4]
// o(n2)时间复杂度，超出限制
var maxProfit = function(prices) {
  let left = 0, right = 1
  let max = 0
  while (left + 1 < prices.length) {
    if (prices[right] - prices[left] > max) {
      max = prices[right] - prices[left]
    }
    if (right === prices.length - 1) {
      left++
      right = left
    }
    right++
  }
  return max
};

console.log(maxProfit([7,1,5,3,6,4]))

