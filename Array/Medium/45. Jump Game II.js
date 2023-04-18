/** method 1 greedy method
 * 
 */
var jump = function(nums) {
  let n = nums.length
  let jumps = 0
  let right = 0
  let left = 0

  while(right < n - 1){
    let max = 0

    for(let i = left; i <= right; i++){
      max = Math.max(max, i + nums[i])
    }
    left = right + 1
    right = max
    jumps++
  }
  return jumps
};
