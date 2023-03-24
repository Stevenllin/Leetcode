/** method 1
 * 
 * 
 * Time Complexity O(3n)
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

/** method 2
 * 
 * Store all char and those appereace times in @objS
 * 
 * And use for loop to check if all char from @t is exist in @objS
 * 
 * Time Complexity O(2n)
*/

var isAnagram = function(s, t) {
  if(s.length !== t.length) return false
  
  const objS = {}
  for(let i = 0; i < s.length; i++){
    if(objS[s[i]]){
      objS[s[i]] = objS[s[i]] + 1
    }else{
      objS[s[i]] = 1
    }
  }
  for(let i = 0; i < t.length; i++){
    if(!objS[t[i]]){
      return false
    }else{
      objS[t[i]] = objS[t[i]] - 1
    }
  }
  return true
};

/** method 3
 * 
 * it's almost like method 1
 * the difference is covert to string
 */
var isAnagram = function(s, t) {
  if(s.length != t.length) return false;

  var s = s.split("").sort().join("");
  var t = t.split("").sort().join("");

  return s == t;
};