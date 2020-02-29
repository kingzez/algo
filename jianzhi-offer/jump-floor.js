/**
 * 题目：跳台阶
 * 描述：一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）
 * 类型：递归
 * f(n) = f(n-1) + f(n-2)
 * f(1) = 1
 * f(2) = 2
 */

function jumpFloor(number) {
  // if ([0, 1, 2].includes(number)) return number // 此方法在牛客网上超时无法通过
  if (number === 0) return 0
  if (number === 1) return 1
  if (number === 2) return 2
  return jumpFloor(number - 1) + jumpFloor(number - 2)
}
