/** method 1 Time Limit Exceeded
 * 
 */
 var canCompleteCircuit = function(gas, cost) {
  const gasSum = gas.reduce((accumulator, currentValue) => accumulator + currentValue, 0)  
  const costSum = cost.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  
  if (costSum > gasSum) return -1

  for (let i = 0; i < gas.length; i++) {
    if (gas[i] >= cost[i]) {
      const result = i !== gas.length-1 ? helper(i, i+1, gas[i]) : helper(i, 0, gas[i])
      if (result !== -1) return result
    }
  }
  return -1
  
  function helper (orignalIndex, currentIndex, currentGas) {
    if (orignalIndex === currentIndex && currentGas >= 0) return orignalIndex
    if (currentIndex === 0) {
      currentGas = currentGas + gas[currentIndex] - cost[gas.length-1]
    } else {
      currentGas = currentGas + gas[currentIndex] - cost[currentIndex-1]
    }
    if (currentGas < cost[currentIndex]) return -1
    return currentIndex !== gas.length - 1 ? helper(orignalIndex, currentIndex+1, currentGas) : helper(orignalIndex, 0, currentGas) 
  }
};