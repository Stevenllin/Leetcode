/** 
 * method 1
 */
var detectCycle = function(head) {
  if(!head || !head.next) return null

  let slow = head
  let fast = head
  let pointer = head

  while(fast && fast.next){
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) break
  }
  if (fast !== slow) return null
  while(pointer !== slow){
    pointer = pointer.next
    slow = slow.next
  }
  return slow
};