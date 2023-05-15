/** method 1
 * 
 */
 var compareVersion = function(version1, version2) {
  const array1 = version1.split('.')
  const array2 = version2.split('.')
  const length = Math.max(array1.length, array2.length)
  const array1Length = array1.length
  const array2Length = array2.length

  for (let i = 0; i < length; i++) {
    if (i >= array1Length) array1.push(0)
    if (i >= array2Length) array2.push(0)

    if (parseInt(array1[i]) > parseInt(array2[i])) {
      return 1
    }
    if (parseInt(array1[i]) < parseInt(array2[i])) {
      return -1
    }
  }
  return 0
};