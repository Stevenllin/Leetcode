/** method 1
 * 
 * Time complexity O(n)
*/

var reverseList = function(head) {
  if(!head) return head
  if(!head.next) return head

  let previous = head
  let current = head.next
  previous.next = null

  while(current){
    let temp = current
    current = current.next
    temp.next = previous
    previous = temp
  }

  return previous
};