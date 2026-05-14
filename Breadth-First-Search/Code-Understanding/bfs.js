// 1 -- Tree (BFS) -- //

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);


let queue = [root];
while (queue.length > 0) {
    let crnt = queue.shift();
    console.log(crnt.val);
    if (crnt.left)
        queue.push(crnt.left);
    if (crnt.right)
        queue.push(crnt.right);
}