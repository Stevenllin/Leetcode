/** 練習三次 */

/** Method 1
 * 策略：將 @s @t 先轉為陣列排序後，再轉為字串後進行比較
 * 
 * 時間複雜度為 O(nlogn)
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  const sortedS = [...s].sort().join('')
  const sortedT = [...t].sort().join('')

  return sortedS === sortedT
};

/** Method 2 
 * 策略：
 * 1. 透過 @freq 儲存每個字母狀態，以字母為 key 
 * 2. 第一個 for loop 每一輪 @s 以 +1 代表出現， @t 以 -1 
 * 3. 第二個 for loop 檢查 @freq 是否有 value 不為 0
 * 
 * 時間複雜度為 O(n)
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  var freq = new Array(26).fill(0);

  for (var i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  for (var i = 0; i < freq.length; i++) {
    if (freq[i] !== 0) return false;
  }

  return true;
};