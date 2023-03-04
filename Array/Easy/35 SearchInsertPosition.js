/** Method 1 Binary Search
 * Strategy
 * 
 * if target is exist in array @nums then array method indexOf can find out the result
 * otherwise usind binary search method and return rightIndex + 1
 * 
 * Notice that while loop condition should contains equal operator to find out when target is smaller than the smallest number in @nums
 * the time complexity could be O(logn)
*/
var searchInsert = function(nums, target) {
  if (nums.indexOf(target) >= 0) return nums.indexOf(target)

  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex+rightIndex)/2)
    if (nums[middleIndex] > target) {
      rightIndex = middleIndex - 1
    } else if (nums[middleIndex] < target) {
      leftIndex = middleIndex + 1
    } else {
      return middleIndex;
    }
  }

  return rightIndex + 1
};

/** Method 2 
 * Strategy
 * This method is add target to nums and sort again
 * 
 * the time complexity could be O(n)
*/
var searchInsert = function(nums, target) {
  nums.push(target)
  nums.sort((a, b) => a - b)
  
  return nums.indexOf(target)
};

/** Method 3
 * Stragety
 * @currentIndex is the index we want to find out
 * 
 * the method is to find the first number in @nums is bigger than target and return that number index @currentIndex
 * if there is no number bigger than target then return 0 (default number is 0)
*/
var searchInsert = function(nums, target) {
  if (nums.indexOf(target) >= 0) return nums.indexOf(target)

  let currentIndex = 0;
  let currentValue = nums[currentIndex]

  while(currentValue < target) {
    currentIndex++
    currentValue = nums[currentIndex]
  }
  return currentIndex
};

/** Method 4
 * Strategy
 * @targetNumber is the first number bigger than or equal to the @target
 * 
 * the index of @targetNumber is what we want
 * And if there is all number in @nums is smaller than target then return the length of @nums
*/
var searchInsert = function(nums, target) {
  const targetNumber = nums.filter(item => item >= target)[0]

  if (!targetNumber) return nums.length
  return nums.indexOf(targetNumber)
}