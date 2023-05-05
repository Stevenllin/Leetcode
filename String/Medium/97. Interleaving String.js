/** method 1 greedy
 * 
 */
var isInterleave = function(s1, s2, s3) {
  const object = {}
  if (s1.length + s2.length !== s3.length) return false

  return helper(0, 0, 0)

  function helper (i, j, k) {
    let result = false

    if (k >= s3.length) return true
    if (object['' + i + j + k] !== undefined) return object['' + i + j + k]

    if (s1[i] === s3[k] && s2[j] === s3[k]) {
      result = helper(i+1, j, k+1) || helper(i, j+1, k+1)
    } else if (s1[i] === s3[k]) {
      result = helper(i+1, j, k+1)
    } else if (s2[j] === s3[k]) {
      result = helper(i, j+1, k+1)
    }

    object['' + i + j + k] = result
    return result
  }
};
