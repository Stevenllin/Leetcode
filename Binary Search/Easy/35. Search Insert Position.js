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

/** method 2 Linear search
 * 
 * @targetNumber is the first number in @nums is bigger than target
 * if there is no such @targetNumber then return the length of @nums
 * Otherwise use the method indexOf to find out the index of @targetNumber 
 * 
 * Time complexity O(n)
*/
var searchInsert = function(nums, target) {
  const targetNumber = nums.filter(item => item >= target)[0]
  if(!targetNumber) return nums.length
  return nums.indexOf(targetNumber)
}