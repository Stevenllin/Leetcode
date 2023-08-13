/** 練習兩次 */

/** Method 1
 * 策略：爬 n 階 = 爬 (n - 1) 階 + 爬 (n - 2) 階，此問題可列為 Fibonacci 數列
 * 
 * 時間複雜度為：O(n)
 */

var climbStairs = function(n) {
  let array = [0, 1, 2]

  for (let i = 3; i <= n; i++) {
    array[i] = array[i-1] + array[i-2]
  }
  return array[n]
};

/** Method 2 Time Limit Exceeded
 * 策略：利用 Tree 遍歷所有路徑可能，若計算路徑最終 @current 為零，則計算 @number
 * 
 * 時間複雜度為：
 */
var climbStairs = function(n) {
  let number = 0
  findPath(n)
  function findPath(current){
    if(current === 0){
      number++
      return  
    }
    if(current < 0){
      return
    }
    return findPath(current-1) || findPath(current-2)
  }
  return number
};