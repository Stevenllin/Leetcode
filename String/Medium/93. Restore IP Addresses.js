/** method 1
 * 
 */
var restoreIpAddresses = function(s) {
  const result = []

  if (s.length < 4 || s.length > 12) return result
  helper(s, '', 0)

  return result

  function helper (string, temp, index) {
    if (index === 4 && string.length === 0) result.push(temp.substring(1))
    if (index === 4 || string.length === 0) return

    helper(string.substring(1), temp + '.' + string.substring(0, 1), index + 1)

    if (string[0] !== '0' && string.length > 1) {
      helper(string.substring(2), temp + '.' + string.substring(0, 2), index + 1)
      if (string.length > 2 && parseInt(string.substring(0, 3)) <= 255) {
        helper(string.substring(3), temp + '.' + string.substring(0, 3), index + 1)
      }
    }
  }
};
