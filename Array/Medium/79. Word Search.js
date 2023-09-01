/** 練習兩次 */

/** Method 1 
 * 策略：
 * 1. 使用 Nested For Loop 檢查當前值是否與 @word 第一個字母相同，若相同則進入 @helper 。此外，若 @helper 回傳為 true 則直接回傳 true
 * 2. 每一輪 @helper 檢查當前 @index 與 @word 的長度是否相同。如果要檢查得字母與 @board 當前值相同且 不@board 當前值不為 # 則繼續執行 @helper (代入上下左右)
 * 
 * 備註：
 * 1. 使用 # 字，標示已走過的路徑，並使用暫存的 @temp 還原原來的字母
 * 
 * 時間複雜度為：
 */

var exist = function(board, word) {
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[0].length; j++){
      if(board[i][j] === word[0]){
        if(helper(i, j, 0)) return true
      }
    }
  }

  return false

  function helper(i, j, index){
    if(index === word.length) return true
    if(!board[i] || !board[i][j]) return false

    if(board[i][j] !== '#' && word[index] === board[i][j]){
      const temp = board[i][j]
      board[i][j] = '#'  
      if(helper(i+1, j, index+1)) return true
      if(helper(i-1, j, index+1)) return true
      if(helper(i, j+1, index+1)) return true
      if(helper(i, j-1, index+1)) return true
      board[i][j] = temp
    }
    return false
  }
};
