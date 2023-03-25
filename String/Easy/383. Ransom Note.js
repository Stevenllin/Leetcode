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

/** method 2
 * 
 * when char from @ransomNote is exist in @dicArr then remove that char from @dicArr 
 * 
 * Time complexity O(n^2)
 */

 const canConstruct = (ransomNote, magazine) => {
  let dicArr = [...magazine];
  for (const c of ransomNote) {
    const index = dicArr.indexOf(c);
    if (index < 0) return false;
    dicArr.splice(index, 1);
  }
  return true;
};
