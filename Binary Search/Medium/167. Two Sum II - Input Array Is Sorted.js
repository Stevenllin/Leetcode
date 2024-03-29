/** method 1
 * 
 */
var twoSum = function(numbers, target) {
  let left = 0
  let right = numbers.length - 1
  
  while (left < right) {
    const current = numbers[left] + numbers[right]
    if (current === target) return [left+1, right+1]

    current > target ? right-- : left++
  }
};
