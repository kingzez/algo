// 145. 二叉树的后序遍历
// 给定一个二叉树，返回它的 后序 遍历。

// 示例:

// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// 输出: [3,2,1]
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
// 递归
const postorderTraversal = function (root) {
  const res = []
  traversal(root, res)
  return res

  function traversal(root, res) {
    if (!root) return
    if (root.left) {
      traversal(root.left, res)
    }
    if (root.right) {
      traversal(root.right, res)
    }
    res.push(root.val)
  }
}

// 迭代
const postorderTraversal = function(root) {
  const res = []
  const stack = []
  if (!root) return res
  stack.push(root)

  while (stack.length) {
    const node = stack.pop()
    res.unshift(node.val)
    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }
  return res
}