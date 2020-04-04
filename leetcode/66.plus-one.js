/**
 * 66. 加一
 * 类型：数组

给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:

输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
示例 2:

输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/plus-one
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 * 末位无进位，+1后 return digits
 * 末位有进位，在中间末位置停止进位 return digits
 * 一直有进位，每个值都为0，第一位+1，digits 长度+1
 */
var plusOne = function(digits) {
  const len = digits.length
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++
    digits[i] = digits[i] % 10
    console.log(digits[i])
    if (digits[i] !== 0) return digits
  }
  digits = Array(len + 1).fill(0)
  digits[0] = 1
  return digits
};