/** Method 1 */
/** Strategy 
 * @map is an object to store element of nums as key and the index as value
 * @currentValue : the value of each loop of nums
 * @target - @currentValue : the value might be stored in our @map

 * if the value of index @target - @currentValue in @map is greater than or equal to 0, which means this number is we want to find
  then return this round index i and the previous one @target - @currntValue
 * otherwise store this round index as value and value as key in our @map for the rest of loop

 * the time complexity could be O(n)
*/
var twoSum = function(nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i]

    if(map[target - currentValue] >= 0){
      return [i, map[target - currentValue]]
    }else{
      map[currentValue] = i
    }
  }
};

/** Method 2 Brute Force
 * @goal is the value that we want to find in this round of loop
 * the second for loop start from the index i + 1 to avoid repeating
 * if the @goal is exist in nums[i+1] ~ nums[nums.length] then return the index i and j
 * 
 * the disadvantage is nested for loop
 * the time complexity is O(n^2) 
*/

var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i]
    const goal = target - currentValue
    for (let j = i + 1; j < nums.length; j++) {
      if (goal === nums[j]) {
        return [i, j]
      }
    }
  }
};