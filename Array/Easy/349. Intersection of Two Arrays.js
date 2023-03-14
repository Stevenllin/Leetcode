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

/** method 2 
 * Strategy
 * 
 * use Set to create @set1 @set2 to remove duplicated number in @nums1 @nums2
 * covert @set1 to array and filter the same number in @set2
 * 
 * Time complexity O(n)
*/

var intersection = function(nums1, nums2) {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)

  return [...set1].filter(item => set2.has(item))
};