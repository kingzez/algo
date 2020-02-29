/**
136. 只出现一次的数字

给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/single-number

思路
时间复杂度O(n) 空间复杂度O(1) 所以不能使用排序，Map 数据结构存储，考虑使用二进制异或^

关键点
1. 异或的性质
   两个数字异或的结果`a^b`是将 a 和 b 的二进制每一位进行运算，得出的数字。 运算的逻辑是
   如果同一位的数字相同则为 0，不同则为 1

2. 异或的规律

- 任何数和本身异或则为`0`

- 任何数和 0 异或是`本身`

3. 很多人只是记得异或的性质和规律，但是缺乏对其本质的理解，导致很难想到这种解法（我本人也没想到）

4. 位运算
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let ret = 0

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index]
    ret = ret ^ element
  }

  return ret
}

console.log('result', singleNumber([1, 2, 2, 2, 2, 2, 2]))
console.log('result', singleNumber([4, 1, 2, 1, 2]))
console.log('result', singleNumber([2, 2, 1]))
