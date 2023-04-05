/** method 1 
 * 
 * create an object @object to store the number with current corresponding index
 * if index @i - the previous index of this value stored in @object that is smaller than or equal to @k then return true
 * 
 * Time complexity O(n)
 */
var containsNearbyDuplicate = function(nums, k) {
  if(nums.length <= 1) return false

  let object = {}
  for(let i = 0; i < nums.length; i++){
    if(i - object[nums[i]] <= k){
      return true
    }
    object[nums[i]] = i
  }
  return false
};