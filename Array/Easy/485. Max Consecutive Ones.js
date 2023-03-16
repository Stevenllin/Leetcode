/** method 1
 * 
 * @max is to store the current maximum number of consecutive when @nums do the iteration
 * @currentNum is to store current number of consecutive
 * 
 * when @currentNum is bigger than @max then set @max to @currentNum
 * 
 * Time complexity O(n)
*/

var findMaxConsecutiveOnes = function(nums) {
  if(nums.length === 1) return nums[0]

  let currentNum = 0;
  let max = 0;

  for(let i = 0; i < nums.length; i++){
    if(nums[i] === 1){
      currentNum++
    }else{
      currentNum = 0
    }
    if(currentNum >= max){
      max = currentNum
    }
  }

  return max
};