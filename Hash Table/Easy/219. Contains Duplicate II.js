/** 練習兩次 */

/** Method 1 
 * 策略：@object 目的是存取對應數字上一次的 index @i ，若上一次 index 與此輪的 index 相差小於 @k ，則回傳 true。
 * 
 * 時間複雜度為 O(n)
 */
 var containsNearbyDuplicate = function(nums, k) {
  const object = {}

  for(let i = 0; i < nums.length; i++){
    if(object[nums[i]] === null){
      object[nums[i]] = i  
    }else{
      if(Math.abs(i-object[nums[i]]) <= k){
        return true  
      }else{
        object[nums[i]] = i
      }  
    }  
  }
  return false
};