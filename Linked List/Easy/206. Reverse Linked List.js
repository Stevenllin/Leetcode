/** Method 1
 * 策略：
 * 將每一輪目前節點  @temp 的下一節點連接至前一個節點 @previous
 * 
 * 注意：每一輪要記得重新設定前一個節點 @previous 等於每輪目前節點 @temp
 * 
 * Time complexity O(n)
*/

var reverseList = function(head) {
  if(!head) return head
  if(!head.next) return head

  let previous = head
  let current = head.next
  /** 將第一節點 node 之後的所有連結設為 null  */
  previous.next = null

  while(current){
    /** 目前的節點 node */
    let temp = current
    /** 移致下一節點 */
    current = current.next
    /** 將目前的節點的下一點連結至上一點 */
    temp.next = previous
    /** 設定上一點等於目前的 node */
    previous = temp
  }

  return previous
};