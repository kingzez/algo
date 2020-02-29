/**
 * 题目：二维数组中的查找
 * 描述：在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * 类型：数组
 * 解题思路：该二维数组中的一个数，小于它的数一定在其左边，大于它的数一定在其下边。因此，从右上角开始查找，就可以根据 target 和当前元素的大小关系来缩小查找区间，当前元素的查找区间为左下角的所有元素。
 *
 *
 * 时间复杂度 O(m*n)
 * 运行时间：58ms
 * 占用内存：7936k
 */
function Find(target, array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.includes(target)) return true
  }
  return false
}

/**
 *
 *
 * 时间复杂度 O(m+n)
 * 运行时间：61ms
 * 占用内存：8064k
 */
function FindII(target, matrix) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return false
  }
  const rows = matrix.length
  const cols = matrix[0].length
  let row = 0
  let col = cols - 1

  while (row <= rows - 1 && col >= 0) {
    if (target === matrix[row][col]) {
      return true
    } else if (target > matrix[row][col]) {
      row++
    } else {
      col--
    }
  }
  return false
}

const array = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

console.log(Find(5, array))
console.log(
  Find(7, [
    [1, 2, 8, 9],
    [4, 7, 10, 13]
  ])
)
