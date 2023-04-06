/** method 1 
 * 
 */
var findWords = function(words) {
  const arrayOne = "qwertyuiop".split('')
  const arrayTwo = "asdfghjkl".split('')
  const arrayThree = "zxcvbnm".split('')

  const result = []

  for(let i = 0; i < words.length; i++){
    let timesOne = 0
    let timesTwo = 0
    let timesThree = 0

    for(let j = 0; j < words[i].length; j++){
      if (arrayOne.indexOf(words[i]) !== -1) timesOne++
      if (arrayTwo.indexOf(words[i]) !== -1) timesTwo++
      if (arrayThree.indexOf(words[i]) !== -1) timesThree++

      if (timesOne === words[i].length || timesTwo === words[i].length || timesThree === words[i].length) result.push(words[i])

      if (timesOne !== 0 && timesTwo !== 0 && timesThree !== 0) break
    }
  }

  return result
};