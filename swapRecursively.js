module.exports = function swapRecursively(root) {
  if (root === null) {
    return null;
  }
  let left = root.left;
  root.left = root.right;
  root.right = left;

  if (root.left !== null) {
    swapRecursively(root.left);
  }
  if (root.right !== null) {
    swapRecursively(root.right);
  }
  return root;
};
