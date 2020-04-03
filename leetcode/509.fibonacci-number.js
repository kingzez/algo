/**
 * 509. 斐波那契数
 * 类型：递归

斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
给定 N，计算 F(N)。

 
示例 1：

输入：2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
示例 2：

输入：3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
示例 3：

输入：4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3.
 

提示：

0 ≤ N ≤ 30

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fibonacci-number

 *
*/
// var fib = function(n) {
//   if (n === 0) return 0
//   if (n === 1) return 1
//   return (fib(n - 1) + fib(n - 2))%1000000007
// };

/**
 * 缓存f(0), f(1)
 */
var fib = function(n) {
  let arr = [0, 1]
  for (let i = 2; i <= n; i++) {
    arr.push((arr[i - 1] % 1000000007) + (arr[i - 2] % 1000000007))
  }
  console.log('arr', arr)
  return arr[n] % 1000000007
}

console.time('re')
const re = fib(100)
console.log(re)
console.timeEnd('re')
