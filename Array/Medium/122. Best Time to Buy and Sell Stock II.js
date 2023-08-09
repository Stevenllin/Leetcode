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
