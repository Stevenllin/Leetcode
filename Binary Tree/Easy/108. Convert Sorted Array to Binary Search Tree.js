/** 練習兩次 */

/** Method 1 
 * 策略：由於，陣列 @nums 是已排序好，因此，可以透過 DFS 方式，每次從傳入的陣列 @nums 取得中間 index，並創建一個節點 @root 其值為陣列 @nums 的中間值
 * 將 @root 左右分別連接陣列以 @leftTree @rightTree 為傳入參數的函數回傳。
 * 
 * 注意：需要透過 slice 方法創建新的陣列，避免污染原資料
 * 
 * 時間複雜度
 */
var sortedArrayToBST = function(nums) {
  if(nums.length === 0) return null
  if(nums.length === 1) return new TreeNode(nums[0])

  const middle = Math.floor(nums.length/2)
  const root = new TreeNode(nums[middle])

  const leftTree = nums.slice(0, middle)
  root.left = sortedArrayToBST(leftTree)
  const rightTree = nums.slice(middle+1, nums.length)
  root.right = sortedArrayToBST(rightTree)
  
  return root
};