/** method 1 binary search 
 * Strategy
 * 
 * @middle is the average of @top and @bottom
 * Compare @x with the square of @middle
 * 
 * smaller which means value @top need to be decreased
 * bigger which means value @bottom need to be increased
 * equal then return @middle
 * 
 * if we can't find out the value, the @bottom is bigger than @top now so return the @top
 * 
 * Time complexity O(logn)
 */

var mySqrt = function(x) {
  if (x < 2) return x
  let top = x
  let bottom = 1

  while(bottom <= top){
    let middle = Math.floor((top + bottom)/2)
    const target = middle * middle
    if(target === x){
      return middle
    }else if(target < x){
      bottom = middle + 1
    }else{
      top = middle - 1
    }
  }
  return top
};
