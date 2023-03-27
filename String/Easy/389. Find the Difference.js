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