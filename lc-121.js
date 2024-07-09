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

// 循环找出最低点，最高点
var maxProfit = function(prices) {
  let minIndex = 0, maxIndex = 0
  let minValue = Number.MAX_SAFE_INTEGER, maxValue = 0
  let max = 0
  for(let i = 0; i < prices.length; i++) {
    if(prices[i] > maxValue) {
      maxValue = prices[i]
      maxIndex = i
    }
    if(prices[i] < minValue) {
      minValue = prices[i]
      minIndex = i
    }

    if(maxIndex > minIndex) {
      max = Math.max(max, maxValue - minValue)
    } else {
      maxValue = 0
      maxIndex = 0
    }
  }
  return max
};

// 递归思想：index=n的最大值 = max(n减去前n-1的最小值，n-1的最大利润)
var maxProfit = function(prices){
  let minValue = Number.MAX_SAFE_INTEGER 
  function getMax(n) {
    let max = 0
    if(n > 0) {
      max = Math.max(getMax(n - 1), prices[n] - minValue) // getMax函数需要在前面，以便在出栈时，再计算price[n] - minValue 
    }
    
    if(minValue > prices[n]) {
      minValue = prices[n]
      
    }
    return max
  }
  return getMax(prices.length - 1)
};

console.log(maxProfit([1, 2, 3, 1, 7]))
// stack
// getMax(0)         minValue = prices[0], max = 0
// ...                 
// getMax(n - 3)  ->  
// getMax(n - 2)
// getMax(n - 1)
