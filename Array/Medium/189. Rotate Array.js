/** method 1 
 * 
 */
var rotate = function(nums, k) {
  k = k%(nums.length)
  for (let i = 0 ; i < k ; i++){
    let value = nums.pop();
    nums.unshift(value);
  }
};

/** method 2
 * 
 */
var rotate = function (nums, k) {
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  for (let j = k - 1; j >= 0; j--) {
    nums[j] = nums.pop();
  }
};
