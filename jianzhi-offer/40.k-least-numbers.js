/**
 * 题目：面试题40. 最小的k个数
 * 描述：输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

示例 1：

输入：arr = [3,2,1], k = 2
输出：[1,2] 或者 [2,1]
示例 2：

输入：arr = [0,1,2,1], k = 1
输出：[0]

限制：
0 <= k <= arr.length <= 10000
0 <= arr[i] <= 10000
通过次数48,812提交次数83,179

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

解题思路：数组排序后截取

第一种方式使用sort函数排序
第二种方式使用快排
 */
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
const getLeastNumbers1 = function(arr, k) {
  return arr.sort((a, b) => a - b).slice(0, k)
}


const getLeastNumbers = function(arr, k) {
  quickSort(arr, 0, arr.length - 1)
  return arr.slice(0, k)
}

function quickSort(arr, start, end) {
  if (start < end) {
    const pivotIndex = partition(arr, start, end)
    quickSort(arr, start, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, end)
  }
}

function partition(arr, start, end) {
  const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]]
  const pivot = arr[end]
  let startIndex = start

  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, startIndex)
      startIndex++
    }
  }
  swap(arr, startIndex, end)
  return startIndex
}

const arr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2]

console.log(getLeastNumbers(arr, 10))
