/** method 1
 * 
 * the method is to use obj @objS to store the number of appearance times of each char from @s
 * 
 * Time Complexity O(n)
 */
var findTheDifference = function(s, t) {
  let objS = {}

  for(let i = 0; i < s.length; i++){
    if(objS[s[i]]){
      objS[s[i]] = objS[s[i]] + 1
    }else{
      objS[s[i]] = 1
    }
  }

  for(let i = 0; i < t.length; i++){
    if(objS[t[i]]){
      objS[t[i]] = objS[t[i]] - 1
    }else{
      return t[i]
    }
  }
};

/** method 2 
 * 
 * convert string @s @t to @arrayS @arrayT
 * 
 * Time Complexity O(n)
 */
var findTheDifference = function(s, t) {
  if (!s.length) return t
  const arrayS = [...s].sort()
  const arrayT = [...t].sort()

  for(let i = 0; i < s.length; i++){
    if(arrayS[i] !== arrayT[i]) return arrayT[i]
  }
  return arrayT.pop()
};

/** method 3 
 * 
 * convert each char from string @s @t to number respectively
 * 
 * Time Complexity O(n)
 */
var findTheDifference = function(s, t) {
  let numberT = 0
  let numberS = 0

  for(let i = 0; i < t.length; i++){
    numberT = numberT + t.charCodeAt(i)
    
    if(i < t.length - 1){
      numberS = numberS + s.charCodeAt(i)
    }
  }

  return String.fromCharCode(numberT-numberS)
};