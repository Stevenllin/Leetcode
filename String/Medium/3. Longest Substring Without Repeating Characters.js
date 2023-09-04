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

/** Method 2
 * 策略：
 * 1. 透過 @set 加入當前不重複的字串，@left 是字串左點 index，@right 是字串右點 index
 * 2. 若 @set 包含右點的字母，不斷在 @set 移除左點 @left 的字母 ，直到 @set 不包含右點的字母
 * 3. 若 @set 不包含左點的字母，加入目前字母，將左 @left 右 @right 相差後與 @longest 長度大小比較
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0
  let longest = 0
  let set = new Set

  for(let right = 0; right < s.length; right++){
    if(!set.has(s[right])){
      set.add(s[right])
      longest = Math.max(longest, right-left+1)
    }else{
      while(set.has(s[right])){
        set.delete(s[left])
        left++
      }
      set.add(s[right])  
    }  
  }

  return longest
};