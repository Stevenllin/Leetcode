/** Method 1 貪心
 * 策略：
 * 碰到前一天價格小於當前價格即計算入最終收益 @benefit
 * 
 * 時間複雜度為 O(n)
 */
var maxProfit = function(prices) {
  let benefit = 0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] - prices[i-1] > 0) {
      benefit = benefit + prices[i] - prices[i-1]
    }
  }
  return benefit
};

/** Method 2 
 * 策略：動態規劃
 * dp[i][0]：代表第 i 天持有股票的最大收益（可在第 i 天以前或是當天買入）
 * dp[i][1]：代表第 i 天不持有股票的最大收益（可在第 i 天以前或是當天賣出）
 * 
 * 以第 i 天持有股票 dp[i][0]
 * 因可以買賣多次，當第 i 天買入股票收益，所時有的收益應為 昨日不持有股票 - 今日股票價格
 * 
 * 以第 i 天不持有股票 dp[i][1]
 * 兩種情形：
 * 第 i - 1 天就不持有股票 dp[i-1][1]
 * 第 i 天賣出股票 prices[i] + dp[i-1][0]
 * 
 * 時間複雜度為 O
 */
var maxProfit = function(prices) {
  const dp = new Array(prices.length).fill([0, 0])
  dp[0] = [-prices[0], 0]

  for (let i = 1; i < prices.length; i++) {
    dp[i] = [
      Math.max(dp[i-1][0], dp[i-1][1] - prices[i]),
      Math.max(dp[i-1][1], prices[i] + dp[i-1][0])
    ]
  }

  return dp[prices.length-1][1]
};
