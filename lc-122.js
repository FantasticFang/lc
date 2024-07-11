// 122. Best Time to Buy and Sell Stock II

// 1.正常思路
var maxProfit = function (prices) {
  let max = 0
  let holdIndex = null
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      // 上升趋势
      if (holdIndex === null) { // 如果没有持有
        holdIndex = i
      }      
    } else {
      if (holdIndex !== null) { // 如果在波峰持有
        max += prices[i] - prices[holdIndex]
        holdIndex = null
      }
    }
  }
  
  // 到最后一天依然有持有，那就卖掉
  if (holdIndex !== null) {
    max += prices[prices.length - 1] - prices[holdIndex]
    holdIndex = null
  }  
  return max
};

// 2. 直接累加上升趋势即可
var maxProfit = function (prices) {
  let max = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      max += prices[i] - prices[i - 1]
    }
  }
  return max
};

