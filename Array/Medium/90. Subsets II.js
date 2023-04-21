/** method 1 
 * 
 */

var subsetsWithDup = function(nums) {
  const subset = []
  subset.push([])

  let indexStart = 0
  let indexEnd = 0

  for(let i = 0; i < nums.length; i++){
    indexStart = 0
    
    if(i > 0 && nums[i] === nums[i-1]){
      indexStart = indexEnd + 1
    }

    indexEnd = subset.length - 1

    for(let j = indexStart; j < indexEnd+1; j++){
      const target = [...subset[j]]
      target.push(nums[i])
      subset.push(target)
    }
  }
  return subset
}