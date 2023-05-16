/** method 1 
 * 
 */
var swapPairs = function(head) {
  if (!head || !head.next) return head

  let previous = head
  let current = head.next

  while (previous || current) {
    let temp = previous.val
    previous.val = current.val
    current.val = temp

    if (!current.next || !current.next.next) break;
    previous = current.next
    current = current.next.next
  }
  return head
};
