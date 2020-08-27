// 4. 二叉树的中序遍历
// 给定一个二叉树，返回它的中序 遍历。

// 示例:

// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// 输出: [1,3,2]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 迭代
const inorderTraversal = function (root) {
  const stack = []
  const res = []
  let curr = root
  while (curr !== null || stack.length) {
    while (curr !== null) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()
    res.push(curr.val)
    curr = curr.right
  }
  return res
}

// 递归
const inorderTraversal = function(root) {
  const res = []
  traversal(root, res)
  return res

  function traversal(root, res) {
    if (!root) return
    if (root.left) {
      traversal(root.left, res)
    }
    res.push(root.val)
    if (root.right) {
      traversal(root.right, res)
    }
  }
}