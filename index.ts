interface Node {
  left: Node | null;
  right: Node | null;
}

function count(node: Node | null): number {
  if (node === null) {
    return 0;
  }
  return 1 + count(node.left) + count(node.right);
}
