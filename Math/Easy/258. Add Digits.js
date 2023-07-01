/** 練習兩次 */

/** Method 1 
 * 策略：透過 while loop 方法，將 @num 每個元素相加，當 @num < 10 時，即回傳
 * 
 * 時間複雜度為 O(n*n)
 */
var addDigits = function(num) {
  while(num >= 10){
    const array = [...num.toString()]
    let sum = 0
    for(let i = 0; i < array.length; i++){
      sum = sum + parseInt(array[i])  
    }
    num = sum
  }
  return num
};
