function swapIteratively(root) {
  if (root === null) {
    return null;
  }

  let queue = [root];
  while (queue.length > 0) {
    let currNode = queue.shift();
    let left = currNode.left;
    let right = currNode.right;
    currNode.right = left;
    currNode.left = right;
    if (currNode.left) {
      queue.push(right);
    }
    if (currNode.right) {
      queue.push(left);
    }
  }
  return root;
}
