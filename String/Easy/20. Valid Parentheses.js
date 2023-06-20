/** 練習兩次 */

/** Method 1 
 * 策略：
 * 1. 若遞迴當前值為 '(', '[', '{' ，將對應的 ')', ']', '}' push 至 @array
 * 2. 若遞迴當前值並非 '(', '[', '{' ，將 @array pop 後比較當前遞迴值是否相同，若不同，即回傳 false
 * 
 * 注意：最後，@array 的長度可能不為空，例如 @s 為 ['(']
 * 
 * 時間複雜度為 O(n)
*/
var isValid = function(s) {
  if(s.length%2 !== 0) return false

  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  const array = []

  for(let i = 0; i < s.length; i++){
    if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
      array.push(map[s[i]])
    }else{
      if(s[i] !== array.pop()){
        return false
      }
    }
  }
  return array.length === 0
};
