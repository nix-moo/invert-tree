function swap(root) {
  if (root.left && root.right) {
    let left = root.left;
    root.left = root.right;
    root.right = left;
  }

  return root;
}
