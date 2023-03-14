/** method 1 
 * Strategy
 * 
 * @lengthNums1 the length of @nums1 because the length of @num1 would be changed when we pop the number from @nums1
 * if we use indexOf method find out the @target is exist in @num2 then remove that number from @nums2
 * 
 * Time complexity O(n^2)
*/

var intersect = function(nums1, nums2) {
  const result = []
  const lengthNums1 = nums1.length

  for(let i = 0; i < lengthNums1; i++){
    const target = nums1.pop()
    if (nums2.indexOf(target)) {
      nums2.splice(nums2.indexOf(target), 1)
      result.push(target)
    }
  }
};