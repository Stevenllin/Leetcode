/** method 1 
 * 
 */
 var sortList = function(head) {
  const array = []

  while (head) {
    array.push(head.val)
    head = head.next
  }
  array.sort((a, b) => a - b)

  let list = new ListNode(0)
  const result = list
  const length = array.length

  for (let i = 0; i < length; i++) {
    list.next = new ListNode(array[i])
    list = list.next
  }
  return result.next
};
