/** 練習兩次 */

/** Method 1
 * 策略：將每個字母對應獨立的數字 @numberS @numberT 分別儲存於 @objectS @objectT 。每一次遞迴比較 @objectS @objectT 此次的 @numberS @numberT ，不相等即回傳 false
 * 
 * 時間複雜度為 O(n)
 */

 var isIsomorphic = function(s, t) {
  if(s.length !== t.length) return false
  
  const objectS = {}
  const objectT = {}
  let numberS = 0
  let numberT = 0

  for(let i = 0; i < s.length; i++){
    if(!objectS[s[i]]){
      numberS++
      objectS[s[i]] = numberS
    }
    if(!objectT[t[i]]){
      numberT++
      objectT[t[i]] = numberT
    }
    if(objectS[s[i]] !== objectT[t[i]]) return false
  }
  return true
};


