function preOrderTraversal(root) {
  if (root !== null) {
    console.log(root.val);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
  }
}
