/** 練習一次 */
var characterReplacement = function(s, k) {
  const chars = {}
  let left = 0
  let result = 0
  let maxF = 0

  for(let right = 0; right < s.length; right++){
    const char = s[right]
    chars[char] = 1 + (chars[char] || 0)

    maxF = Math.max(maxF, chars[char])

    while((right-left+1) - maxF > k){
      /** 這裏 maxF 不用更新嗎 */
      chars[s[left]] -= 1
      left++
    }

    result = Math.max(result, right-left+1)
  }

  return result
};