/**
 * 面试题18. 删除链表的节点
给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

返回删除后的链表的头节点。

注意：此题对比原题有改动

示例 1:

输入: head = [4,5,1,9], val = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
示例 2:

输入: head = [4,5,1,9], val = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.


说明：

题目保证链表中节点的值互不相同
若使用 C 或 C++ 语言，你不需要 free 或 delete 被删除的节点
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 68 ms
var deleteNode = function (head, val) {
  // 首先 findByValue(5) 的 Node 作为当前 targetNode
  // 再根据当前 Node 节点 findPrev Node
  // preNode.next = targetNode.next 即可删除当前节点
  const findByValue = val => {
    let currentNode = head
    while (currentNode !== null) {
      if (currentNode.val === val) return currentNode
      currentNode = currentNode.next
    }
    return -1
  }
  const findPrev = val => {
    let currentNode = head
    while (currentNode !== null && currentNode.next !== null) {
      if (currentNode.next.val === val) return currentNode
      currentNode = currentNode.next
    }
    return -1
  }

  // 如果是首节点，直接返回删除节点的next
  if (head.val === val) return head.next

  const targetNode = findByValue(val)
  if (targetNode === -1) return

  const prevNode = findPrev(val)
  prevNode.next = targetNode.next
  return head
}

// 100 ms
var deleteNode1 = function (head, val) {
  // 如果是首节点，直接返回删除节点的next
  // 遍历链表，记录preNode currentNode
  // preNode.next = targetNode.next 即可删除当前节点
  if (head.val === val) return head.next

  let currentNode = head
  let preNode = head
  while (currentNode !== null && currentNode.val !== val) {
    preNode = currentNode
    currentNode = currentNode.next
  }
  preNode.next = currentNode.next
  return head
}