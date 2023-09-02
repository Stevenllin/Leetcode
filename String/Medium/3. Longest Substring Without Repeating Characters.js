/** 練習一次 */

/** Method 1 Sliding Window
 * 策略：
 * 1. @word 代表當前要檢查的字串，每一輪遞迴加入字母
 * 2. 將 @word 轉成 Set 資料型態並比較長度大小是否相等
 * 3. 若相等，則比較 @longest
 * 4. 若不相等，移除 @word 第一個字母
 * 
 * 時間複雜度為：O(n^2) 
 */
var lengthOfLongestSubstring = function(s) {
  let word = ''
  let longest = 0
  for(let i = 0; i < s.length; i++){
    word = word + s[i]
    const set = new Set(word)
    if(word.length === set.size){
      longest = Math.max(longest, word.length)
    }else{
      word = word.slice(1)
    }
  }
  return longest
};