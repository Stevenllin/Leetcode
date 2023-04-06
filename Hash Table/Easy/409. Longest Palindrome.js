/** method 1
 * 
 */
var longestPalindrome = function(s) {
  if(s.length === 1) return 1

  const keys = {}
  let longest = 0

  for(let i = 0; i < s.length; i++){
    if(keys[s[i]]){
      keys[s[i]] = keys[s[i]] + 1
      if(keys[s[i]]%2 === 0){
        longest = longest + 2
      }
    }else{
      keys[s[i]] = 1
    }
  }
  return s.length > longest ? longest + 1 : longest
};
