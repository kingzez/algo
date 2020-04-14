/**
 * 题目：498. 对角线遍历
 * 类型：数组
给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。

 

示例:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

输出:  [1,2,4,7,5,3,6,8,9]

解释:
https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/diagonal_traverse.png
说明:

给定矩阵中的元素总数不会超过 100000 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/diagonal-traverse
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
    return []
  }

  const result = []
  const m = matrix.length
  const n = matrix[0].length

  let flag = true
  for (let i = 0; i < m + n; i++) {
    const pm = flag ? m : n
    const pn = flag ? n : m

    let x = (i < pm) ? i : pm - 1
    let y = i - x

    while (x >= 0 && y < pn) {
      result.push(flag ? matrix[x][y] : matrix[y][x])
      x--
      y++
    }

    flag = !flag
  }

  return result
};

console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))