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

/** Method 2
 * 策略：由於題目提示數字除了出現一次就是兩次，因此，可以先排列好陣列。每一輪遞迴，檢查前兩元素是否相等，相等則移除前兩位，否則，跳出 for loop，回傳第一個陣列值
 * 
 * 注意： @length 是為了鎖定 @nums 的長度大小，因 splice 方法會不斷移除 @nums
 * 
 * 時間複雜度為 O(nlogn)
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