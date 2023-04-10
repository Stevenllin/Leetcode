/** method 1 
 * 
 */
var insert = function(intervals, newInterval) {
  const result = []

  for(let i = 0; i < intervals.length; i++){
    let interval = intervals[i]
    /** overlaps */
    if (Math.max(interval[0], newInterval[0]) <= Math.min(interval[1], newInterval[1])) {
      newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])]
      continue
    }
    /** when intervals[i][0] is higher than newInterval[1] */
    if (interval[0] > newInterval[1]){
      result.push(newInterval, ...intervals.splice(i))
      return result
    }
    /** when newInterval is higher */
    result.push(interval)
  }
  result.push(newInterval)

  return result
};
