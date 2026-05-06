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

let queue = [root];
while (queue.length > 0) {
    let crnt = queue.shift();
    console.log(crnt.val);
    if (crnt.left)
        queue.push(crnt.left);
    if (crnt.right)
        queue.push(crnt.right);
}