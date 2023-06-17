/** 練習一次 */

/** Method 1 
 * 策略：題目可使用 for loop 找到答案，但透過 Binary Search 可更快速找到。
 * 
 * 時間複雜度為 O(logn)
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let left = 1
    let right = n

    while(left <= right){
      let middle = Math.floor((left+right)/2)
      if(!isBadVersion(middle)){
        left = middle + 1
      }else{
        right = middle - 1
      }
    }
    return left
  };
};