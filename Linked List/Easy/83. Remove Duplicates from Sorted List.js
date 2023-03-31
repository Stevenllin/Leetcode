/** method 1 
 * 
 */
var deleteDuplicates = function(head) {
  if(head === null || head.next === null) return head;

  let current = head
  
  while (current.next !== null) {
    if (current.val !== current.next.val) {
      current = current.next
    }else{
      current.next = current.next.next
    }
  }
  return head
};

