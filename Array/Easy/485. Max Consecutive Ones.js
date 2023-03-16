/** method 1
 * 
 * @max is to store the current maximum number 1 of consecutive when @nums do the iteration
 * @currentNum is to store current number 1 of consecutive
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
    max = Math.max(currentNum, max)
  }

  return max
};

/** method 2
 * 
 * @result is to store all number 1 of consecutive
 * 
 * Math.max() time complexity O(n)
 * 
 * Time Complexity O(n)
*/
var findMaxConsecutiveOnes = function(nums) {
  nums.push(0)
  let result = []
  let count = 0
  for(let i = 0; i < nums.length; i++){
    if(nums[i] === 1){
      count += 1
    }
   if(nums[i] === 0){
     result.push(count)
     count = 0
   }
  }
   return Math.max(...result)
};