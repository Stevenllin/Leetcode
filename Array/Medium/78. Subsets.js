/** method 1 
 * 
 */
 var subsets = function(nums) {
  const subsets = []
  subsets.push([])

  for(let i = 0; i < nums.length; i++){
    const n = subsets.length

    for(let j = 0; j < n; j++){
      const target = [...subsets[j]]
      target.push(nums[i])
      subsets.push(target)
    }
  }
  return subsets
};