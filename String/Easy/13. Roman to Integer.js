/** 練習兩次 */

/** Method 1 
 * 策略：
 * 透過範例可觀察到，兩種邏輯
 * 1. 當前字母對應的數字大於下一個字母對應的數字，將當前字母對應的數字加入 @result ；
 * 2. 當前字母對應的數字小於下一個字母對應的數字，將下一個字母對應的數字 - 當前字母對應的數字 加入 @result
 * 
 * 注意：若為第二個邏輯時，需跳過下一輪遞迴，將 @i + 1
 * 
 * 時間複雜度為 O(n)
 */
var romanToInt = function(s) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  
  let result = 0
  for(let i = 0; i < s.length; i++){
    if(i !== s.length-1 && map[s[i]] < map[s[i+1]]){
      result = result + map[s[i+1]] - map[s[i]]
      i++
    }else{
      result = result + map[s[i]]  
    }
  }
  return result
};