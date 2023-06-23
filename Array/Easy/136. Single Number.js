/** 練習兩次 */

/** Method 1 
 * 策略：透過 @object 紀錄所有值出現得字數
 * 
 * 時間複雜度為 O(n)
*/
var singleNumber = function(nums) {
  if(nums.length === 1) return nums[0]

  const object = {}

  for(let i = 0; i < nums.length; i++){
    if(!object[nums[i]]){
      object[nums[i]] = 1  
    }else{
      object[nums[i]] = object[nums[i]] + 1  
    }
  }

  for(item in object){
    if(object[item] === 1) return item  
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