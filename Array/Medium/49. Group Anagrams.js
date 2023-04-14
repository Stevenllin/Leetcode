/** method 1 
 * 
 */
 var groupAnagrams = function(strs) {
  const result = []
  const object = {}
  for(let i = 0; i < strs.length; i++){
    const target = [...strs[i]].sort().toString()
    if(object[target] == null){
      const array = [strs[i]]
      object[target] = array
    }else{
      const array = object[target]
      array.push(strs[i])
    }
  }
  Object.keys(object).map(key => {
    const array = object[key]
    result.push(array)
  })
  return result
};
