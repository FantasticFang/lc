// 169. Majority Element
/**
 * @param {number[]} nums
 * @return {number}
 */
// 空间复杂度o(n)
var majorityElement = function(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1; 
    } else {
      map[nums[i]]++;
    }
    
    if (map[nums[i]] > nums.length / 2) {
      return nums[i];
    }
  }
};

// 假设你在投票选人 如果你和候选人（利益）相同，你就会给他投一票（count+1），如果不同，你就会踩他一下（count-1）当候选人票数为0（count=0）时，就换一个候选人，但因为和你利益一样的人占比超过了一半不论换多少次 ，最后留下来的都一定是个和你（利益）相同的人
// 空间复杂度o(1)
var majorityElement = function(nums) {
  let count = 0;
  let candidate = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }
    if (candidate === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return candidate
};
