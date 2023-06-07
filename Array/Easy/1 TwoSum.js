/** 練習兩次 */

/** Method 1 
* 策略：透過一個以陣列的元素為 key、 index 為 value 的 Hash map @map ，以實現單一的 for loop 即能找到答案。
* 每一次遞迴 判斷目標值 @target - @currentValue 是否存在於 @map ，若存在即返回兩個 index，若不存在將此輪的陣列元素 key 與 index 儲存 

* 注意：必須判斷 @target - @currentValue 在 @map 中是否存在後，才能將此輪 index @i  儲存於 @map 的 @currentValue

* 時間複雜度為 O(n)
*/
var twoSum = function(nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i]

    if(map[target - currentValue] >= 0){
      return [i, map[target - currentValue]]
    }else{
      map[currentValue] = i
    }
  }
};

/** Method 2 
 * 策略：此方法透過兩層的 for loop (不建議)
 * 
 * 注意：第二個 for loop 的 @j 初始值為 @i + 1，以減少重複尋找答案 
 * 
 * 時間複雜度 O(n^2)
*/

var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i]
    const goal = target - currentValue
    for (let j = i + 1; j < nums.length; j++) {
      if (goal === nums[j]) {
        return [i, j]
      }
    }
  }
};
