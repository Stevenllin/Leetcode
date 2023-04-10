/** method 1 
 * 
 */
var merge = function(intervals) {
  if(intervals.length < 2) return intervals

  intervals.sort((a, b) => a[0] - b[0])

  let previous = intervals[0]
  const result = []

  for(let i = 1; i < intervals.length; i++){
    if(previous[1] >= intervals[i][0]){
      previous = [previous[0], Math.max(previous[1], intervals[i][1])]
    }else{
      result.push(previous)
      previous = intervals[i]
    }
  }

  result.push(previous)

  return result
};
