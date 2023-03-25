/** method 1
 * 
 * store the number of appearance times of each char from @magazine as an object @objM
 * 
 * Time complexity O(n)
 */

var canConstruct = function(ransomNote, magazine) {
  let objM = {}

  for(let i = 0; i < magazine.length; i++){
    if(objM[magazine[i]]){
      objM[magazine[i]] = objM[magazine[i]] + 1
    }else{
      objM[magazine[i]] = 1
    }
  }

  for(let i = 0; i < ransomNote.length; i++){
    if(objM[ransomNote[i]]){
      objM[ransomNote[i]] = objM[ransomNote[i]] - 1
    }else{
      return false
    }
  }
  return true
};