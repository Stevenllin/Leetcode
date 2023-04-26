var addStrings = function(num1, num2) {
  let string = ''
  let flag = false
  let index1 = num1.length - 1
  let index2 = num2.length - 1

  while(index1 >= 0 || index2 >= 0){
    let number1 = 0
    let number2 = 0
    let target = 0

    if(index1 >= 0){
      number1 = parseInt(num1[index1])
    }
    if(index2){
      number2 = parseInt(num2[index2])
    }
    if(flag){
      target = number1 + number2 + 1
    }else{
      target = number1 + number2
    }

    if(target >= 10){
      string = target[1] + string
      flag = true
    }else{
      string = target + string
      flag = false
    }
    index1--
    index2--
  }
  return string
};