/**
 * 面试题45. 把数组排成最小的数
输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

示例 1:

输入: [10,2]
输出: "102"
示例 2:

输入: [3,30,34,5,9]
输出: "3033459"
 

提示:

0 < nums.length <= 100
说明:

输出结果可能非常大，所以你需要返回一个字符串而不是整数
拼接起来的数字可能会有前导 0，最后结果不需要去掉前导 0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
解题思路：修改排序规则，两个转成字符串后相加比较，
x + y > y + x, 则 x > y eg: x = '3', y = '30', x+y = '330', y+x = '303', x+y > y+x -> '3' > '30'
x + y < y + x, 则 x < y

排序部分也可使用快排
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
const minNumber = function(nums) {
  nums = nums.forEach(String)
  const compare = (x, y) => {
    const [a, b] = [x + y, y + x]
    if (a > b) return 1
    if (a < b) return -1
    return 0
  }

  const sortNums = nums.sort(compare)
  return sortNums.join('')
}
