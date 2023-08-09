/** 練習兩次 */

/**  Method 1
 * 策略：
 * 設定一個紀錄當前最小值 @min 與紀錄當前差價的最大值 @maxProfit
 * 若 當前值 - @min 是大於 @maxProfit ，設定此差值為 @maxProfit
 * 若 當前值小於 @min ，設定當前值為 @min
 * 
 * 時間複雜度為 O(n)
*/
var maxProfit = function(prices) {
  let maxProfit = 0
  let min = prices[0]

  for(let i = 0; i < prices.length; i++){
    if(prices[i] < min) min = prices[i]
    if(prices[i] - min > maxProfit) maxProfit = prices[i] - min
  }

  return maxProfit
};

/** Method 2 
 * 策略：動態規劃
 * dp[i][0]：代表第 i 天持有股票的最大收益（可在第 i 天以前或是當天買入）
 * dp[i][1]：代表第 i 天不持有股票的最大收益（可在第 i 天以前或是當天賣出）
 * 
 * 每一輪比較 dp[i] 的第一個元素、第二個元素
 * 第一個元素：過去最大買入收益與當天買入收益
 * 第二個元素：過去最大賣出收益與當天賣出收益
 */
var maxProfit = function(prices) {
  const dp = new Array(prices.length).fill([0, 0])
  /** 陣列 dp 初始化 */
  dp[0] = [-prices[0], 0]
  
  for (let i = 1; prices.length; i++) {
    dp[i] = [
      Math.max(dp[i-1][0], -prices[i]),
      Math.max(dp[i-1][1], prices[i] + dp[i-1][0])
    ]
  }
  return dp[prices.length-1][1]
};