/** method 1 
 * 
 */
var generateParenthesis = function(n) {
  const solution = []

  generate(n, n, "")

  function generate (left, right, string) {
    if (left > right) return
    if (!left && !right) {
      solution.push(string)
    }

    if (left > 0) generate(left-1, right, string + "(")
    if (right > 0) generate(left, right-1, string + ")")
  }

  return solution
};
