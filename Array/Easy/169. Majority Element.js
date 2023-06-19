/** 練習兩次 */

/** Method 1
 * 策略：透過 @map 紀錄所有值出現的次數，若當前值的次數在遞迴中已大於陣列長度一半，即回傳當前值
 * 
 * 注意：若 @nums 的長度大小僅為一，回傳陣列值
 * 
 * 時間複雜度為 O(n)
*/

var majorityElement = function(nums) {
  if (nums.length === 1) return nums[0]
  let map = {}

  for(let i = 0; i < nums.length; i++){
    if(!map[nums[i]]){
      map[nums[i]] = 1
    }else{
      map[nums[i]] = map[nums[i]] + 1
      if (map[nums[i]] > (nums.length/2)) return nums[i]
    }
  }
};