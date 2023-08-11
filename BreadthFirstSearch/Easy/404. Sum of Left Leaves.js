/** 練習兩次 */

/** Method 1 
 * 策略：
 * 遍歷 Tree，並透過變數 @isLeaf 判斷節點來源是否為左邊分支
 * 若是左分支且無子分支，則將此點的值相加
 * 
 * 
 * 時間複雜度為 O(n)
*/
var sumOfLeftLeaves = function(root) {

  return addLeaf(root, 0, false)

  function addLeaf(root, result, isLeaf){
    if(!root) return result
    if(!root.left && !root.right && isLeaf){
      result = result + root.val
    }
    result = addLeaf(root.left, result, true)
    result = addLeaf(root.right, result, false)

    return result
  }
};
