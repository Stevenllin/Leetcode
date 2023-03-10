/** method 1
 * @obj an object to store the number of each number in an array @nums
 * 
 * if the length of @nums just return the only number
 * 
 * Notice that each loop also check the number of target number is bigger than the length of @nums / 2
 * Time complexity O(n)
*/

var majorityElement = function(nums) {
  if (nums.length === 1) return nums[0]
  let obj = {}

  for(let i = 0; i < nums.length; i++){
    if (obj[nums[i]]) {
      obj[nums[i]] = obj[nums[i]] + 1
      if (obj[nums[i]] >= (nums.length/2)) {
        return nums[i]
      }
    }else{
      obj[nums[i]] = 1
    }
  }
};

/** method 1
 * the only difference between method 1 and method 2 is using the Map data structure
*/

var majorityElement = function(nums) {
  let map = new Map()

  for(let i = 0; i < nums.length; i++){
      let targetTimes = map.get(nums[i])

      if(targetTimes == undefined){
          map.set(nums[i], 1)
      }else{
          map.set(nums[i], targetTimes+1)
          if (targetTimes+1) {
            return nums[i]
          }
      }
  }
};