/** method 1 binary search
 * Strategy
 * 
 * Because the @nums is a sorted array so use the binary search is faster than linear search
 * 
 * Time complexity O(logn)
*/ 

var searchInsert = function(nums, target) {
  let bottomIndex = 0
  let topIndex = nums.length - 1

  while(bottomIndex <= topIndex){
    let middleIndex = Math.floor((bottomIndex + topIndex)/2)
    
    if(nums[middleIndex] === target){
      return middleIndex
    }else if(nums[middleIndex] > target){
      topIndex = middleIndex - 1
    }else if(nums[middleIndex] < target){
      bottomIndex = middleIndex + 1
    }
  }
  return topIndex + 1
}