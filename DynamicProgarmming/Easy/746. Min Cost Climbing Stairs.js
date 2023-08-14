/** 練習一次 */

/** Method 1 
 * 策略：
 * dp[i] 代表若到達此階，所花費最小。因此，若須找到 i 階的花費，則需往前比較前兩階 dp[i-1] 與 dp[i-2] 的花費 + 各階所需的花費 cost[i-1] 與 cost[i-2]。
 */

var minCostClimbingStairs = function(cost) {
  /** 第一階與第二階不需要花費 */
  const dp = [0, 0]
  for(let i = 2; i <= cost.length; i++){
    dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])
  }
  return dp.pop()
};
