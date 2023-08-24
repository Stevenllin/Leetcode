/** 練習兩次 */

/** Method 1 
 * 策略：
 * 1. 創建一個新的 Linked List ，若當前 @l1 @l2 存在則需要將個別當前值加入至 @sum
 * 
 * 注意：
 * 1. 需要考慮到進位問題
 * 2. list 連接的點為 @sum 除以 10 取餘數
 * 
 * 時間複雜度為 O(n)
 */
var addTwoNumbers = function(l1, l2) {
  let list = new ListNode(0)
  let result = list
  let sum, carry = 0
  while(l1 || l2 || carry > 0){
    /** 每一輪需重置為 0 */
    sum = 0

    /** l1 不為 @null 時 */
    if(l1 !== null){
      sum = sum + l1.val
      l1 = l1.next
    }

    /** l2 不為 @null 時 */
    if(l2 !== null){
      sum = sum + l2.val
      l2 = l2.next
    }
    /** 加入進位 carry */
    sum = sum + carry
    /** 連接 @sum 的個位數 */
    list.next = new ListNode(sum%10)
    carry = parseInt(sum/10)
    list = list.next
  }
  return result.next
};
