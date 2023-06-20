/** 練習兩次 */

/** Method 1 
 * 策略：題目提到時間複雜度需 O(logn)，且是已排序到的陣列 @nums ，因此，可透過 Binary Search 解決問題
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