/** method 1 
 * 
 * if @flag is true it means this node is looped before
 * 
 * Time complexity O(n)
*/

var hasCycle = function(head) {
  if (head === null || head.next === null) return null

  while (head.next) {
    if(head.flag){
      return true
    }
    head.flag = true
    head = head.next
  }
  return false
};
