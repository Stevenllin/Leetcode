/** method 1 
 * 
 * if @i can be divided by 3 and 5 then add Fizz and Buzz to @string respectively
 * 
 * Time complexity O(n)
 */

var fizzBuzz = function(n) {
  const array = []

  for(let i = 1; i < n; i++){
    let string = ''
    let flag = false;
    if(i % 3){
      string = string + 'Fizz'
      flag = true
    }
    if(i % 5){
      string = string + 'Buzz'
      flag = true
    }
    if(flag){
      array.push(string)
    }else{
      array.push(i.toString())
    }
  }
  return array
};