/** 練習兩次 */

/** Method 1 
 * 策略：比較當前節點與下個節點的 val 是否相等。若相等，將當前節點的 next 連接至下下個節點
 * 
 * 時間複雜度為 O(n)
 */
 var deleteDuplicates = function(head) {
  if (!head || !head.next) return head

  let current = head

  while (current && current.next) {
    if (current.val === current.next.val) {
        current.next = current.next.next
    } else {
        current = current.next
    }
  }
  return head
};

