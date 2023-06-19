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