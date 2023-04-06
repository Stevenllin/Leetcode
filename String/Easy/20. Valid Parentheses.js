/** method 1 
 * 
 * Time complexity O(n)
*/
var isValid = function(s) {
  if((s.length % 2) !== 0) return false
  
  const object = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  const stack = []
  for(let i = 0; i < s.length; i++){
    if(object[s[i]]){
      stack.push(object[s[i]])
    }else{
      if(s[i] !== stack.pop()){
        return false
      }
    }
  }
  return stack.length === 0
};
