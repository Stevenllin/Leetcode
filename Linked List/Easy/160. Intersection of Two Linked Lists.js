/** method 1
 * 
 * calculate the difference between the length of @headA and @headB
 * According to the @difference set the length of @headA and @headB to be equal
 * 
 * And loop over modified @headA and @headB
 * if @headA is equal to @headB then return @headA
 * 
*/

var getIntersectionNode = function(headA, headB) {
  const difference = getDifference(headA, headB)
  const absDifference = Math.abs(difference)

  if(difference < 0){
    for(let i = 0; i < absDifference; i++){
      headB = headB.next
    }
  }else{
    for(let i = 0; i < absDifference; i++){
      headA = headA.next
    }
  }

  while(headA && headB){
    if(headA === headB){
      return headA
    }
    headA = headA.next
    headB = headB.next
  }
  return null
};

function getDifference(headA, headB) {
  let timesA = 0
  let timesB = 0 
  while (headA) {
    timesA++
    headA = headA.next
  }
  while (headB) {
    timesB++
    headB = headB.next
  }
  return timesA - timesB
}
