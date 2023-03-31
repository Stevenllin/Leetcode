/** method 1 
 * store all number in an array @array
 * 
 * Time complexity O(n)
 */

var isPalindrome = function(head) {
  if (head === null) return false

  const array = []
  while (head.next) {
    array.push(head.val)
    head = head.next
  }
  for(let i = 0; i < Math.floor(array.length); i++){
    if(array[i] !== array[array.length - i - 1]) return false
  }
  return true
};
