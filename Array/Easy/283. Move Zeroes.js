/** method 1 
 * Strategy
 * 
 * for loop to check each number of @nums whether is equal to 0 or not.
 * if the number is 0 then remove the number and push 0 at the end of array @nums
*/

var moveZeroes = function(nums) {       
  for(let i = nums.length; i >= 0; i--){
    if(nums[i] === 0){
      nums.splice(i, 1)
      nums.push(0);
    }
  }
};
