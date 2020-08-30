/**
 * 题目：88. 合并两个有序数组
 * 描述：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 

示例:

输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let nums1Copy = []
  /**
   *
   *
   * @param {Array<number>} src 原数组
   * @param {number} srcPos 原数组的开始位置
   * @param {Array<number>} dest 目标数组
   * @param {number} destPos 目标数组的开始位置
   * @param {number} len 复制的长度
   */
  function arrayCopy(src, srcPos, dest, destPos, len) {
    dest.splice(srcPos, len, ...src.slice(destPos, len))
  }
  arrayCopy(nums1, 0, nums1Copy, 0, m)
  let p1 = 0
  let p2 = 0

  let p = 0

  while (p1 < m && p2 < n) {
    if (nums1Copy[p1] < nums2[p2]) {
      nums1[p] = nums1Copy[p1]
      p++
      p1++
    } else {
      nums1[p] = nums2[p2]
      p++
      p2++
    }
  }

  if (p1 < m) {
    arrayCopy(nums1Copy, p1, nums1, p1 + p2, m + n - p1 - p2)
  }

  if (p2 < n) {
    arrayCopy(nums2, p2, nums1, p1 + p2, m + n - p1 - p2)
  }

   console.log('nums1Copy', nums1Copy)
   console.log('nums1', nums1)
}

nums1 = [1, 2, 3, 0, 0, 0]
m = 3
nums2 = [2, 5, 6]
n = 3
merge(nums1, m, nums2, n)
