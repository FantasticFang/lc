// 274. H-Index
/**
Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

Example 1:
Input: citations = [3,0,6,1,5]
Output: 3
Explanation:
[3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
 */

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  const length = citations.length
  const result = []
  
  for (let i = 0; i < length; i++) {
    const index = citations[i] >= length ? length : citations[i]
    if (!result[index]) {
      result[index]=0
    }
    result[index]++
  }
  
  let count = 0
  for (let i = length; i >= 0; i--) {
    if (result[i]) {
      count += result[i]
    }
    if (count >= i) {
      return i
    }
  }
};

hIndex([3,0,6,1,5])
