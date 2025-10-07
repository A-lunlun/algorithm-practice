/**
 * 二分搜尋(binary search)與二元樹搜尋(binary search tree)是不同東西!!
 * 要使用二分搜尋
 */
// 

const sortedArr = [2,9,12,13,29,31,36,38,49,52,55,56,63,77,81,92,98]

const impBinarySearch = (specificNum) => {
  let newArr = sortedArr
  
  while(newArr.length > 0) {
    // console.log(newArr)
    const halfIndex = Math.floor(newArr.length / 2)
    // console.log(halfIndex)
    if (newArr[halfIndex] === specificNum) {
      // console.log('find')
      newArr = []
      return true
    }
    if (newArr[halfIndex] > specificNum) {
      newArr = newArr.slice(0, halfIndex)
    } else {
      newArr = newArr.slice(halfIndex +1 , newArr.length + 1)
    }
  }
  return false
}


console.log(impBinarySearch(0))