/** method 1
 * 
 * Time Complexity O(n)
 * However, this method use 2 times sort(). So it is not really good method
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false

  const arrayS = [...s].sort()
  const arrayT = [...t].sort()

  for(let i = 0; i < arrayT.length; i++){
    if(arrayT[i] !== arrayS[i]) return false
  }
  return true
};