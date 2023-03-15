/** method 1 
 * Strategy
 * 
 * @obj store the unduplicated number
 * 
 * Time complexity: O(n)
*/

var findDisappearedNumbers = function(nums) {
  let obj = {}
  let result = []

  for(let i = 0; i < nums.length; i++){
    if(!obj[nums[i]]){
      obj[nums[i]] = true
    }
  }

  for(let i = 0; i < nums.length; i++){
    if(!obj[i+1]){
      result.push(i+1)
    }
  }

  return result
};

/** method 2 
 * Strategy
 * 
 * Time complexity: O(n^2)
*/

var findDisappearedNumbers = function(nums) {
  let result = []

  for(let i = 0; i < nums.length; i++){
    if(!nums.includes(i+1)){
      result.push(i+1)
    }
  }
  return result
};