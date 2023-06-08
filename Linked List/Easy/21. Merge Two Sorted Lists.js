/** 練習兩次 */

/** Method 1 
 * 策略：
 * 此做法是創建並回傳新的 Link list @target ，利用相同的儲存位置 @copy 。
 * 若當前 @list1 的 val 大於 @list2 的 val， 創建新的 @node 於 @copy 的下一個節點，其值與 @list2 val 相同
 * 若當前 @list2 的 val 大於 @list1 的 val， 創建新的 @node 於 @copy 的下一個節點，其值與 @list1 val 相同
 * 若 while loop 中，list1 或 list2 已經為 null，list2 或 list1 儲存於 @copy 下一個節點
 * 
 * 注意：
 * 1. 若 @list1 為 null，則直接回傳 @list2  
 * 2. 若 @list2 為 null，則直接回傳 @list1  
 * 
 * 時間複雜度為：O(n)
*/
var mergeTwoLists = function(list1, list2) {
  if (!list1) return list2
  if (!list2) return list1

  let target = new ListNode(0)
  let copy = target
  while (list1 || list2) {
    if (!list1) {
      copy.next = list2
      break
    }
    if (!list2) {
      copy.next = list1
      break
    }
    if (list1.val > list2.val) {
      const node = new ListNode(list2.val)
      copy.next = node
      list2 = list2.next
    } else {
      const node = new ListNode(list1.val)
      copy.next = node
      list1 = list1.next
    }
    copy = copy.next
  }
  return target.next
}

/**  Method 2  
 * 策略：
 * 此做法是回傳 @list1 or @list2 
 * 若當前 @list1 的 val 大於 @list2 的 val， call mergeTwoLists 函數並將回傳值存於 @list2 的下一個節點
 * 若當前 @list2 的 val 大於 @list1 的 val， call mergeTwoLists 函數並將回傳值存於 @list1 的下一個節點
 * 
 * 注意：
 * 不同情況下 call mergeTwoLists 時的 arguements 有所不同
 */

var mergeTwoLists = function(list1, list2) {
  if (list1 === null) return list2
  if (list2 === null) return list1

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
}