/** Method 1
 * 策略：
 * 1. 首先透過 @obj 儲存各 element 出現次數
 * 2. 根據出現次數進行排序
 * 3. 根據 @k 整理需回傳得 element
 * 
 * 時間複雜度為：O(nlog(n))
 */
var topKFrequent = function(nums, k) {
  const obj = {}    
  
  for(let i = 0; i < nums.length; i++){
    if(!obj[nums[i]]){
      obj[nums[i]] = 1  
    }else{
      obj[nums[i]]++  
    }
  }

  const array = Object.entries(obj).sort(function(a, b){
    if (a[1] > b[1]) return -1
    if (a[1] < b[1]) return 1
  })


  const result = []
  for(let i = 0; i < array.length; i++){
    if(i < k){
      result.push(array[i][0])
    }else{
      break
    }
  }
  return result
};
