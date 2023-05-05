/** method 1 
 * 
 */
var reorderList = function(head) {
  let fast = head
  let slow = head
  
  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let previous = null
  let current = slow.next

  while (current) {
    let temp = current.next
    current.next = previous
    previous = current
    current = temp
  }

  slow.next = null

  let h1 = head
  let h2 = previous

  while (h2) {
    let temp = h1.next
    h1.next = h2
    h1 = h2
    h2 = temp
  }
};
