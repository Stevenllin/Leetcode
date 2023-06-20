/** 練習兩次 */

/** Method 1 
 * 策略：以 Binary Search 快速找到每輪遞迴的目標值 @target 與 @x 進行比較
 * 
 * 注意：因題目提示若 x 為 8，答案是 2，因此，最後答案需回傳 @right
 * 
 * 時間複雜度為 O(n)
 */

var mySqrt = function(x) {
  let left = 1
  let right = x

  while(left <= right){
    let middle = Math.floor((left+right)/2)
    const target = middle * middle

    if(x < target){
      right = middle - 1  
    }else if (x > target){
      left = middle + 1  
    }else{
      return middle  
    }
  }
  return right
};
