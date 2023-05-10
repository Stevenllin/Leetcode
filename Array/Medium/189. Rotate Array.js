/** method 1 Time Limit Exceeded
 * 
 */
var rotate = function(nums, k) {
  k = k%(nums.length)
  for (let i = 0 ; i < k ; i++){
    let value = nums.pop();
    nums.unshift(value);
  }
};
