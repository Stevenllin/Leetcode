/** method 1 
 * 
 */
var rotateRight = function(head, k) {
  if (!head || !head.next) return head;

  const array = []
  
  while (head) {
    array.push(head.val)
    head = head.next
  }

  k = k%(array.length)

  for(let i = 0; i < k; i++) {
    const target = array.pop()
    array.splice(0, 0, target)
  }

  let list = new ListNode(0)
  const copy = list

  for(let i = 0; i < array.length; i++) {
    list.next = new ListNode(array[i])
    list = list.next
  }

  return copy.next
};