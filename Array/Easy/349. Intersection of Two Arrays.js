/** method 1 
 * Strategy
 * 
 * @obj is to store the number shown in array @nums1
 * then check if number in @obj also is shown in array @nums2 push it to array @result
 * 
 * Time complexity O(n)
*/

var intersection = function(nums1, nums2) {
  let obj = {}
  let result = []
  for(let i = 0; i < nums1.length; i++){
    if (!obj[nums1[i]]){
      obj[nums1[i]] = true
    }
  }

  for(let item in obj){
    if(nums2.includes(item)){
      result.push(item)
    }
  }
  return result
};