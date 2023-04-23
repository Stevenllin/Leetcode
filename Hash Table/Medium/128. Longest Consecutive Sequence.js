/** method 1 
 * 
 */
var longestConsecutive = function(nums) {
  const set = new Set(nums)
  
  let max = 0
  for(const item of set){
    if (set.has(item - 1)) continue

    let currentNum = item
    let currentMax = 1

    while(set.has(currentNum + 1)){
      currentNum = currentNum + 1
      currentMax++
    }
    max = Math.max(currentMax, max)
  }
  return max
};
