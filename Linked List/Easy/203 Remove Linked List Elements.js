/** method 1
 * @head for iteration
 * @node the answer we want to return
 * @reference has the same memory location with @node 
 * Therefore, if we change the value from @reference can also influence with @node 
 * 
 * 
 * this method is according to the orginal Linked List @head
 * if @head current value is not equal to @val then let @reference keep this round value
 * otherwise remove this round value 
*/

var removeElements = function(head, val) {
  let node = new ListNode(0)
  node.next = head

  let reference = node

  while(head !== null) {
    if (head.val !== val) {
      reference = head
      head = head.next
    }else{
      reference.next = head.next
      head = head.next
    }
  }

  return node.next
};

