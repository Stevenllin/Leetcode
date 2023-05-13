/** method 1 
 * 
 */
var largestNumber = function(nums) {
  nums.sort((a, b) => {
      return ('' + a + b) > ('' + b + a) ? -1 : 1
  })
};