/** 練習兩次 */

/** Method 1 
 * 策略：本題透過字串的 charCodeAt 的方法找到對應的數字，並減去 64 將字母歸一 @charNumber 。另外，字母與字母相差 26，因此，每一輪遞迴的當前 @charNumber 乘上對應 @times 加入最終回傳值 @number
 * 
 * 注意：遞迴是從字串的頭開始， @times 為 @columnTitle 的長度 - 1 - @i
 * 
 * 時間複雜度為 O(n)
*/
var titleToNumber = function(columnTitle) {
  let number = 0

  for(let i = 0; i < columnTitle.length; i++){
    const charNumber = columnTitle.charCodeAt(i) - 64
    const times = columnTitle.length - 1 - i
    number = number + charNumber * Math.pow(26, times)
  }

  return number
};
