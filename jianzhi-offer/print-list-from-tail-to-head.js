/**
 * 题目：从尾到头打印链表
 * 描述：输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 * 类型：链表
 *
 * 输入：head = [1,3,2]
 * 输出：[2,3,1]
 *


*/
// function ListNode(x) {
//   this.val = x
//   this.next = null
// }

function printListFromTailToHead(head) {
  const ret = []
  let curr = head

  while (curr) {
    const next = curr.next
    ret.unshift(curr.val)
    curr = next
  }
  return ret
}
