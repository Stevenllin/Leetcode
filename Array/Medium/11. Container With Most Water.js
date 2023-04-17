/** method 1 
 * 
 */
var maxArea = function(height) {
  let max = 0
  let i = 0
  let j = height.length - 1

  while(i < j){
    const area = (j - i) * Math.min(height[i], height[j])
    max = Math.max(max, area)

    if(height[i] > height[j]){
      j = j - 1
    }else{
      i = i + 1
    }
  }
  return max
};
