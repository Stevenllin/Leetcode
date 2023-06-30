/** 練習兩次 */

/** Method 1 
 * 策略：將所有節點的值存於 @array ，儲存後查看 @array 內的元素排序是否為對稱
 * 
 * 時間複雜度為 O(n)
 */
var isPalindrome = function(head) {
  const array = []

  while(head){
    array.push(head.val)  
    head = head.next  
  }

  for(let i = 0; i < array.length; i++){
    if(array[i] !== array[array.length-1-i]) return false
  }
  return true
};
