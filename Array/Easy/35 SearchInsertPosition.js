/** 練習兩次 */

/** Method 1 
 * 策略：從題目中提到規定時間複雜度必須為 O(logn)，以及提示 @nums 為已排序好的陣列，因此，可以透過 Binary Search 實現作法
 * 
 * 時間複雜度為 O(logn)
*/
var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length - 1

  while(left <= right){
    let middle = Math.floor((left+right)/2)
    if(nums[middle] > target){
      right = middle - 1
    }else if(nums[middle] < target){
      left = middle + 1
    }else{
      return middle
    }
  }
  return left
}

/** Method 2
 * 策略：若不考慮時間複雜度的規定，可以透過 filter 小於目標值，快速找到答案。若未能找到，即返回陣列長度大小，代表目標值大於陣列內的所有值
 * 
 * 時間複雜度為 最小 O(1) 最大 O(n)
*/
var searchInsert = function(nums, target) {
  const targetNumber = nums.filter(item => item >= target)[0]

  if (!targetNumber) return nums.length
  return nums.indexOf(targetNumber)
}