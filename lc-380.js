/**
380. Insert Delete GetRandom O(1)
Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.
bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
You must implement the functions of the class such that each function works in average O(1) time complexity.

Example 1:

Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]

Explanation
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.

Constraints:

-2[31] <= val <= 2[31] - 1
At most 2 * 10[5] calls will be made to insert, remove, and getRandom.
There will be at least one element in the data structure when getRandom is called.
 */


var RandomizedSet = function() {
  this.set = {} // 查找时o1时间复杂度
  this.arr = [] // 随机取数时，达到o1时间复杂度
  this.index = 0
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (!this.set.hasOwnProperty(val)) {
    this.index++
    this.set[val] = this.index;
    this.arr.push(val)
    return true
  } else {
    return false
  }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (this.set.hasOwnProperty(val)) {
    const index = this.set[val]
    
    // 把最后一个元素移动到被删除元素的位置
    this.set[this.arr[this.index - 1]] = index // 调整index存储的位置
    this.arr[index - 1] = this.arr[this.index - 1]
    
    delete this.set[val]
    this.index--
    this.arr.pop()
    return true
  } else {
    return false
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  return this.arr[Math.floor(Math.random() * this.index)]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */