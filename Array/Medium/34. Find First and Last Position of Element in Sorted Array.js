/** method 1 
 * 
*/
var searchRange = function(nums, target) {
  const firstIndex = nums.indexOf(target)

  if (firstIndex === -1) return [-1, -1]
  for(let i = firstIndex; i < nums.length; i++){
    if(nums[i] > target) return [firstIndex, i-1]
  }
};

/** method 2 Binary Search
 * 
*/

var searchRange = function(nums, target) {
  let left = 0
  let right = 0
  let targetIndex = undefined

  while(left < right){
    const middle = Math.floor((left + right)/2)
    if(nums[middle] === target){
      targetIndex = middle
      break;
    }else if(nums[middle] > target){
      right = middle - 1
    }else{
      left = middle + 1
    }
  }
  if(targetIndex === undefined) return [-1, -1]
  
  const result = []
  for(let i = targetIndex; i >= 0; i--){
    if(nums[targetIndex] === target && i === 0) result.push(i)
    if(nums[targetIndex] !== target) result.push(i + 1)
  }
  for(let i = targetIndex; i < nums.length; i++){
    if(nums[targetIndex] === target && i === nums.length - 1) result.push(i)
    if(nums[targetIndex] !== target) result.push(i - 1)
  }
  return result
};
