/** method 1 
 * 
 */
var maxProfit = function(prices) {
  let benefit = 0

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i-1] > 0) {
      benefit = benefit + prices[i] - prices[i-1]
    }
  }

  return benefit
};