/** method 1 
 * 
 * this question is very similar to the 205
 * the only difference is @s is string
 * so the length of string is we need to consider 
 */

var wordPattern = function (pattern, s) {
  const arrayP = [...pattern]
  const arrayS = s.split(' ')
  if(arrayP.length !== arrayS.length) return false

  let objP = {}
  let objS = new Map()
  let numberP = 0
  let numberS = 0


  for(let i = 0; i < arrayS.length; i++){
    let targetP = 0
    let targetS = 0

    if(!objS.has(arrayS[i])){
      numberS++
      objS.set(arrayS[i], numberS)
      targetS = numberS
    }else{
      targetS = objS.get(arrayS[i])
    }

    if(!objP[arrayP[i]]){
      numberP++
      objP[arrayP[i]] = numberP
      targetP = numberP
    }else{
      targetP = objP[arrayP[i]]
    }
    console.log(targetS)
    if(targetS !== targetP) return false
  }

  return true
}