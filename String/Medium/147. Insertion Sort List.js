/** method 1
 * 
 */
var insertionSortList = function(head) {
  let list = new ListNode(0)
  let current = head
  let next = null
  let temp = null

  while (current) {
    next = current.next
    temp = list

    while (temp.next && temp.next.val < current.val) {
      temp = temp.next
    }

    current.next = temp.next
    temp.next = current
    current = next
  }

  return list.next
};

/** method 2
 * 
 */
var insertionSortList = function(head) {
  let list = new ListNode(0)
  let current = head
  let target = null

  while (current) {
    let temp = null
    target = list

    while (target.next && target.next.val < current.val) {
      target = target.next
    }

    temp = target.next
    target.next = new ListNode(current.val)
    target.next.next = temp

    current = current.next
  }

  return list.next
};