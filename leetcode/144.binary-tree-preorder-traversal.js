// 144. 二叉树的前序遍历
// 给定一个二叉树，返回它的 前序 遍历。

//  示例:

// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// 输出: [1,2,3]
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
const preorderTraversal = function (root) {
  const stack = []
  const output = []
  if (!root) return output
  stack.push(root)

  while (stack.length) {
    const node = stack.pop()
    output.push(node.val)
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
  return output
}

// 递归
const preorderTraversal = (root) => {
  const res = []
  traversal(root, res)
  return res

  function traversal(root, res) {
    if (!root) return
    res.push(root.val)
    if (root.left) {
      traversal(root.left, res)
    }
    if (root.right) {
      traversal(root.right, res)
    }
  }
}
