/** method 1 
 * 
 */
var partition = function(head, x) {
  const right = []
  const left = []

  while (head) {
    if (head.val < x) {
      left.push(head.val)
    } else {
      right.push(head.val)
    }
    head = head.next
  }
  const array = left.concat(right)

  let result = new ListNode(0)
  const copy = result

  for (let i = 0; i < array.length; i++) {
    result.next = new ListNode(array[i])
    result = result.next
  }
  return copy.next
};

