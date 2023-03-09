/** method 1 
 * Strategy
 * 
 * @obj is an object to store all element as key and the number of occurrences of the element as value
 * 
 * And use the for loop to check @obj and return the key which the value is equal to 1
*/

var singleNumber = function(nums) {
  let obj = {}

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++
    } else {
      obj[nums[i]] = 1
    }
  }

  for (item in obj) {
    if (obj[item] === 1) {
      return item
    }
  }
};