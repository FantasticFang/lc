// 88. Merge Sorted Array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  for(let i = m, j = n; i > 0 || j > 0;) {
    if(j === 0 || (i > 0 && nums1[i - 1] > nums2[j - 1])) {
      nums1[i + j -1] = nums1[i - 1]
      i--
    } else {
      nums1[i + j -1] = nums2[j - 1]
      j--
    }
  }
};

merge([1,2,3,0,0], 3, [1,2], 2)

// 关键点：倒着走指针
// 终止条件：双指针都走完  等价于  i+j-1最终要赋值遍历到0