/** method 1 
 * 
 */
var reverseBetween = function(head, left, right) {
  if(left===right) return head;
  let one = new ListNode(1);        // to avoid left is one
  one.next = head, head = one, left++, right++;    
  let fast = head, slow = head;
  let curr = 1;
  while(curr!==right){
      if(curr<left-1) slow = slow.next;
      fast = fast.next;
      curr++;
  }
  curr = left;
  while(curr!==right){
      let node = slow.next;
      slow.next = slow.next.next;
      let temp = fast.next;
      fast.next = node;
      fast.next.next = temp;
      curr++;  
  }
  return head.next;
};
