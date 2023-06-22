/** 練習兩次 */

/** Method 1
 * 策略：首先，將 non-alphanumeric 移除後轉為小寫字母，再將字串轉為陣列，透過 reverse 方法逆轉後再轉為字串。最後，與原字串 @string 進行比對
 * 
 * 時間複雜度為
 */
var isPalindrome = function(s) {
  let string = s.replace(/[^a-z0-9]/gi, '').replace(/\s/g, '').toLowerCase();
  const reverseString = [...string].reverse().join('')
  return string === reverseString
};