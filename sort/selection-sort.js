const impSelectionSort = (arr) => {
  let oldArr = arr
  let newArr = []

  for(let i=0; i < arr.length; i++) {
    newArr.push(oldArr[0])
    oldArr = oldArr.slice(1)
    console.log('1', oldArr)
    for (let j=0; j< oldArr.length; j++) {
      if (newArr[i] > oldArr[j]) {
        let tmp = newArr[i]
        newArr[i] = oldArr[j]
        oldArr[j] = tmp
        console.log('2', oldArr)
      }

    }
  }
  return newArr
}

const impSelectionSort2 = (arr) => {
  let oldArr = arr
  let newArr = []
  let min

  for(let i=0; i<arr.length; i++) {
    min = oldArr[0]
    oldArr = oldArr.slice(1)
    console.log('1', oldArr)
    for (let j=0; j< oldArr.length; j++) {
      if (min > oldArr[j]) {
        const tmp = min
        min = oldArr[j]
        oldArr[j] = tmp
        console.log('2', oldArr)
      }
    }
    newArr.push(min)
  }
  return newArr
}

// console.log(impSelectionSort([10,3,6,7,1,5)。
console.log(impSelectionSort2([10,3,6,7,1,5]))