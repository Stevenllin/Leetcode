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
