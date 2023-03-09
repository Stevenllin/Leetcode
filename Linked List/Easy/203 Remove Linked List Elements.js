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

/** method 2
 * 
 * this method is to create new node and build these nodes as a Linked List
 * 
 * Notice that should set the next of @target to be null and @reference is equal to the next of @reference so that could be linked as list
*/

var removeElements = function(head, val) {
  let node = new ListNode(0)
  let reference = node

  while(head !== null){
    if(head.val !== val){
      const target = new ListNode(head.val)
      target.next = null
      reference.next = target
      reference = reference.next
      head = head.next
    }else{
      head = head.next
    }
  }
  return node.next
};
