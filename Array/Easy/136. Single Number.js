/** method 1 
 * Strategy
 * 
 * @obj is an object to store all element as key and the number of occurrences of the element as value
 * 
 * And use the for loop to check @obj and return the key which the value is equal to 1
 * 
 * Time complexity O(n)
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

/** method 2
 * Strategy 
 * 
 * only compare the first and the second element @nums if it's not equal then remove these two elements from @nums
 * otherwise break the for loop and return the first element
 * 
 * Notice that we need to store @length first
 * because the length of @nums will be changed after removing element
 * 
 * this method is slower than the method 1 because of sort method
*/
var singleNumber = function(nums) {
  const length = nums.length
  nums.sort((a, b) => a - b)

  for (let i = 0; i < length; i++) {
    if (nums[0] === nums[1]) {
      nums.splice(0, 2)
    } else {
        break
    }
  }
  return nums[0]
};