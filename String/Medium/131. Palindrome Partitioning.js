/** method 1
 * 
 */
var partition = function(s) {
  const result = []

  function backtrack (list, startIndex) {
    const sliced = s.slice(startIndex)

    if (list.join('').length === s.length) {
      result.push([...list])
    }

    for (let i = 0; i < sliced.length; i++) {
      const substring = sliced.slice(0, i+1)
      if (isPalindrom(substring)) {
        list.push(substring)
      } else {
        continue
      }
      backtrack(list, startIndex+i+1)
      list.pop()
    }
  }

  function isPalindrom (string) {
    let left = 0
    let right = string.length - 1

    while (left < right && string[left] === string[right]) {
      left++
      right--
    }

    return left >= right
  }
  backtrack([], 0)

  return result
};


