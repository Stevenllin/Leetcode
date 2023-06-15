/** 練習兩次 */

/** Method 1 
 * 策略：凡經過得節點皆設定一個 flag 為 true 用於紀錄此節點已走過
 * 
 * Time complexity O(n)
*/

var hasCycle = function(head) {
  if (!head || !head.next) return false

  while (head.next) {
    if (head.flag) {
      return true
    }
    head.flag = true
    head = head.next
  }

  return false
};

/** Method 2
 * 策略：此方法是透過快、慢指針，若當前在快、慢指針的節點相等，代表此 Linked List 是循環的
 * 
 * Time complexity O(n)
 */

var hasCycle = function(head) {
  if (!head || !head.next) return false

  let slow = head.next
  let fast = head.next.next

  while (slow && fast) {
    if (slow === fast) {
      return true
    }
    if (!fast.next) return false
    slow = slow.next
    fast = fast.next.next
  }

  return false
};
