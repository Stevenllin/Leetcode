/** 練習兩次 */

/** Method 1
 * 策略：將兩個 Linked List 的長度一致，再同時遞迴找尋交集點
 * 
 * 注意：交集點並非是兩個值相等的點，而是該節點之後的每個點連接至下個節點都是相同的
 * 
 * 時間複雜度為：O(n)
*/
var getIntersectionNode = function(headA, headB) {
  const lengthA = countLength(headA)
  const lengthB = countLength(headB)
  let diff = Math.abs(lengthA-lengthB)

  if(lengthA > lengthB){
    while(diff > 0){
      headA = headA.next
      diff--
    }
  }else{
    while(diff > 0){
      headB = headB.next
      diff--
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
}

function countLength(list){
  let count = 0
  while(list){
      list = list.next
      count++
  }
  return count
}