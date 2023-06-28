/** 練習兩次 */

/** Method 1
 * 策略：比較當前值與前後值並分為三個情況。
 * 
 * 1. 當前值與前後值不相等時，直接 push 當前值
 * 2. 當前值與下一個值相等、前一個值不相等，將 @start 設定為當前值
 * 3. 當前值與前一個值相等、下一個值不相等，push 組合後的字串 (@start -> 當前值)
 * 
 * 注意：需要根據情況重新設定 @start
 */
var summaryRanges = function(nums) {
  let result = []
  let start = 0

  for(let i = 0; i < nums.length; i++){
    if(nums[i] + 1 !== nums[i+1] && nums[i] - 1 !== nums[i-1]){
      result.push("" + nums[i])
    }else if(nums[i] + 1 === nums[i+1] && nums[i] - 1 !== nums[i-1]){
      start = nums[i]
    }else if(nums[i] + 1 !== nums[i+1] && nums[i] - 1 === nums[i-1]){
      result.push("" + start + "->" + nums[i])
    }
  }
  return result
};