interface Node {
  left: Node | null;
  right: Node | null;
}

function count(node: Node | null): number {
  //   if (node === null) {
  //     return 0;
  //   } else {
  //     return 1 + count(node.left) + count(node.right);
  //   }

  return node ? 1 + count(node.left) + count(node.right) : 0;
}

function invertTree(node: Node | null): void {
  if (node === null) {
    return;
  } else {
    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    invertTree(node.left);
    invertTree(node.right);
  }
}
