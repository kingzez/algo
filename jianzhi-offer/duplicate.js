/**
 * 题目：数组中重复的数字
 * 描述：在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中任意一个重复的数字。 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。
 * 类型：数组
 */
/**
 * 本题跟描述有些不符
 * @param {Array} numbers
 * @param {Array} duplication
 */
function duplicate(numbers, duplication) {
  const map = {}
  for (let index = 0; index < numbers.length; index++) {
    const n = numbers[index]
    if (map[n]) {
      duplication[0] = n
      return true
    } else {
      map[n] = true
    }
  }
  return false
}

/**
 * https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 * @param {Array} numbers
 */
function duplicateII(numbers) {
  const map = new Map()
  for (let index = 0; index < numbers.length; index++) {
    const n = numbers[index]
    if (map.has(n)) {
      return n
    } else {
      map.set(n, 1)
    }
  }
}

const numbers = [2, 3, 1, 0, 2, 5, 3]

console.dir(duplicate(numbers, []))
console.dir(duplicateII(numbers))
