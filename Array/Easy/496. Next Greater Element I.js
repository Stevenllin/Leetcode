/** method 1 
 * Strategy
 * 
 * @index is the index in array @nums2 that is the first equal to each iteration value in @nums1
 * 
 * then use for loop from @index to the end of index of @nums2 to find the first bigger than target value
 * 
 * Time complexity O(n^2)
*/

var nextGreaterElement = function(nums1, nums2) {
  let result = []

  for(let i = 0; i < nums1.length; i++){
    const index = nums2.indexOf(nums1[i])

    for(let j = index; j < nums2.length; j++){
      if(nums2[j] > nums1[i]){
        result.push(nums2[j])
        break;
      }else{
        if(j === nums2.length - 1){
          result.push(-1)
        }
      }
    }
  }
  return result
};
