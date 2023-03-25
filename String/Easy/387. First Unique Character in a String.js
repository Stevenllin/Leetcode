/** method 1 
 * store the number of appearance times of each char from @s as an object @obj
 * 
 * loop over string @s and return the index if the char the number of appearance times is 1 otherwise return -1
 * 
 * Time complexity O(n)
*/

var firstUniqChar = function(s) {
  let obj = {}

  for(let i = 0; i < s.length; i++){
    if(obj[s[i]]){
      obj[s[i]] = obj[s[i]] + 1
    }else{
      obj[s[i]] = 1
    }
  }

  for(let i = 0; i < s.length; i++){
    if(obj[s[i]] === 1){
      return i
    }
  }
  return -1
};

/** method 2
 * 
 * create new array @targetArray in each round and remove the current round of char from @targetArray
 * use indexOf method to find out the rest of char in @targetArray
 * 
 * 
 * Time Limit Exceeded Not suggest
 */

var firstUniqChar = function(s) {
  for(let i = 0; i < s.length; i++){
    const targetArray = [...s]
    targetArray.splice(i, 1)
    if(targetArray.indexOf(s[i]) === -1){
      return i
    }
  }
  return -1
};

/** method 3
 *  
 * the method is similar to method 1. Besides this method use array instead of object
 * 
 * Time complexity O(n)
*/

var firstUniqChar = function(s) {
  let array = new Array(26)
  array.fill(0)

  for(let i = 0; i < s.length; i++){
    array[s.charCodeAt(i) - 97]++
  }

  for(let i = 0; i < s.length; i++){
    if(array[s.charCodeAt(i) - 97] === 1) return i
  }
  return -1
};