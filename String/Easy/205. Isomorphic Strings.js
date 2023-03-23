/** method 1
 * 
 * @objS @objT char as the key and the @numberS @numberT as the value
 * if char haven't been exist in @objS or @objT then add the @numberS or @numberT to 1 and store in @objS or @objT
 * And let @numberS or @numberT equal to @targetS or @targetT
 * 
 * if char is exist then set @targetS or @targetT to corresponding value of the key in @objS or @objT
 * Otherwise compare @targetS with @tagetT
 * 
 * Time complexity O(n)
 */

var isIsomorphic = function(s, t) {
  if(s.length !== t.length) return false

  let objS = {}
  let objT = {}
  let numberS = 0
  let numberT = 0

  for(let i = 0; i < s.length; i++){
    let targetS = 0
    let targetT = 0
    if(!objS[s[i]]){
      numberS++
      objS[s[i]] = numberS
      targetS = numberS
    }else{
      targetS = objS[s[i]]
    }
    if(!objT[t[i]]){
      numberT++
      objT[t[i]] = numberT
      targetT = numberT
    }else{
      targetT = objT[t[i]]
    }
    if(targetS !== targetT) return false
  }
  return true
};

