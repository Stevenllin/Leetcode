/** method 1
 * 
 * sort the @g and @s in descending order @sortedChildren @sortedCookie that is because method pop is faster than method splice 
 * 
 * the first loop would remove element from @sortedChildren
 * the second one remove element from @sortedCookie
 * So remember set the length to variable @lengthCookie @lengthChildren
 * 
 * if @targetCookie is bigger than @targetChild then add 1 to @result
 * Otherwise we keep poping new @targetCookie from @sortedCookie until @lengthCookie is equal to 0
 * 
 * Time complexity O(n^2)
*/

var findContentChildren = function(g, s) {
  let result = 0
  const sortedChildren = g.sort((a, b) => b - a)
  const sortedCookie = s.sort((a, b) => b - a)
  const lengthChildren = sortedChildren.length

  for(let i = 0; i < lengthChildren; i++){
    const targetChild = sortedChildren.pop()
    const lengthCookie = sortedCookie.length
    if(lengthCookie === 0){
      break;
    }
    for(let j = 0; j < lengthCookie; j++){
      const targetCookie = sortedCookie.pop()

      if(targetCookie >= targetChild){
        result++
        break;
      }
    }
  }
  return result;
};