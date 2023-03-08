/** method 1 Brute Force
 * 
 * THIS method will result Time Limit Exceeded (Not suggest)
 * 
 * Time complexity O(n*n)
*/
var maxProfit = function(prices) {
  let maxProfit = 0

  for (let i = 0; i < prices.length - 1; i++) {
      for (let j = i+1; j < prices.length; j++) {
          if (prices[j] - prices[i] > maxProfit) {
              maxProfit = prices[j] - prices[i]
          }
      }
  }

  return maxProfit
};

/**  method 2 advanced
 * @min is the smallest number until current loop
 * @maxProfit is the maximum of profit until current loop
 * 
 * The method is to find @min and calculate the @maxProfit at the same time
 * 
 * Time complexity O(n)
*/
var maxProfit = function(prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    }

    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min
    }
  }

  return maxProfit
};