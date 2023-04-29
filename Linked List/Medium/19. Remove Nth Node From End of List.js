/** method 1 
 * 
 */
var removeNthFromEnd = function(head, n) {
  if (!head) return head

  const node = new ListNode(0)
  node.next = head

  let fast = head
  let slow = node

  while (n > 0) {
    fast = fast.next
    n--
  }
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return node.next
};