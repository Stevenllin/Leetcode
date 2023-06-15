/** 練習兩次 */

/** Method 1
 * 策略：爬 n 階 = 爬 (n - 1) 階 + 爬 (n - 2) 階，此問題可列為 Fibonacci 數列
 * 
 * 時間複雜度為：O(n)
 */

var climbStairs = function(n) {
  let array = [0, 1, 2]

  for (let i = 3; i <= n; i++) {
    array[n] = array[i-1] + array[i-2]
  }
  return array[n]
};