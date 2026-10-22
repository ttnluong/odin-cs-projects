class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }

    buildTree(array) {
        const sortedArray = [...new Set(array)].sort((a, b) => a - b);
 
        const build = (start, end) => {
            if (start > end) return null;
            const mid = Math.floor((start + end) / 2);
            const node = new Node(sortedArray[mid]);
            node.left = build(start, mid - 1);
            node.right = build(mid + 1, end);
            return node;
        };

        return build(0, sortedArray.length - 1);
    }

    includes(value) {
        let current = this.root;
        while (current !== null) {
            if (value === current.data) return true;
            current = value < current.data ? current.left : current.right;
        }
        return false;
    }

    insert(value) {
        let current = this.root;
        if (current === null) {
            current = new Node(value);
            return;
        }
        while (true) {
            if (value === current.data) return;
        
            if (value < current.data) {
                if (current.left === null) {
                current.left = new Node(value);
                return;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                current.right = new Node(value);
                return;
                }
                current = current.right;
            }
        }
    }

    deleteItem(value) {
        const remove = (node, value) => {
            if (node === null) return null;

            if (value < node.data) {
            node.left = remove(node.left, value);
            return node;
            }

            if (value > node.data) {
            node.right = remove(node.right, value);
            return node;
            }

            if (node.left === null) return node.right;
            if (node.right === null) return node.left;

            let successor = node.right;
            while (successor.left !== null) {
            successor = successor.left;
            }
            node.data = successor.data;
            node.right = remove(node.right, successor.data);
            return node;
        };

        this.root = remove(this.root, value);
    }

    levelOrderForEach(callback) {
        if (typeof callback !== "function") throw new Error("error");
        let current = this.root;
        if (current === null) return;
        let queue = [current];
        while (queue.length > 0) {
            const node = queue.shift();
            callback(node.data);

            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
    }

    inOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("A callback function is required");
        }

        const visit = (node) => {
            if (node === null) return;

            visit(node.left);
            callback(node.data);
            visit(node.right);
        };

        visit(this.root);
    }

    preOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("A callback function is required");
        }

        const visit = (node) => {
            if (node === null) return;

            callback(node.data);
            visit(node.left);
            visit(node.right);
        };

        visit(this.root);
    }

    postOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("A callback function is required");
        }

        const visit = (node) => {
            if (node === null) return;

            visit(node.left);
            visit(node.right);
            callback(node.data);
        };

        visit(this.root);
    }

    height(value) {
        let current = this.root;

        while (current !== null && value !== current.data) {
            current = value < current.data ? current.left : current.right;
        }

        if (current === null) return undefined;

        const measure = (node) => {
            if (node === null) return -1;
            return 1 + Math.max(measure(node.left), measure(node.right));
        };

        return measure(current);
    }

    depth(value) {
        let current = this.root;
        let edges = 0;
    
        while (current !== null) {
        if (value === current.data) return edges;
    
        current = value < current.data ? current.left : current.right;
        edges++;
        }
    
        return undefined;
    }

    isBalanced() {
        const check = (node) => {
            if (node === null) return -1;

            const left = check(node.left);
            if (left === -2) return -2;

            const right = check(node.right);
            if (right === -2) return -2;

            if (Math.abs(left - right) > 1) return -2;

            return 1 + Math.max(left, right);
        };

        return check(this.root) !== -2;
    }

    rebalance() {
        const values = [];
        this.inOrderForEach((value) => values.push(value));

        this.root = this.buildTree(values);
    }
}


const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null || node === undefined) {
    return;
  }

  prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
}

// let arrayExample = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// let bst = new Tree(arrayExample);
// prettyPrint(bst.root);
// console.log(bst.includes(2));
// console.log(bst.isBalanced());
 
const randomArray = (size = 15, max = 100) =>
  Array.from({ length: size }, () => Math.floor(Math.random() * max));
 
const printOrders = (tree) => {
  const collect = (method) => {
    const values = [];
    tree[method]((value) => values.push(value));
    return values.join(", ");
  };
 
  console.log("Level order:", collect("levelOrderForEach"));
  console.log("Pre order:  ", collect("preOrderForEach"));
  console.log("Post order: ", collect("postOrderForEach"));
  console.log("In order:   ", collect("inOrderForEach"));
};
 
// 1. Create a tree from random numbers below 100
const numbers = randomArray();
console.log("Starting array:", numbers.join(", "));
const tree = new Tree(numbers);
prettyPrint(tree.root);
 
// 2. Confirm it's balanced
console.log("\nBalanced?", tree.isBalanced());
 
// 3. Print all orders
printOrders(tree);
 
// 4. Unbalance the tree with numbers above 100
[101, 150, 200, 250, 300, 350].forEach((value) => tree.insert(value));
console.log("\nAfter adding numbers above 100:");
prettyPrint(tree.root);
 
// 5. Confirm it's unbalanced
console.log("\nBalanced?", tree.isBalanced());
 
// 6. Rebalance
tree.rebalance();
 
// 7. Confirm it's balanced again
console.log("\nAfter rebalance:");
prettyPrint(tree.root);
console.log("\nBalanced?", tree.isBalanced());
 
// 8. Print all orders again
printOrders(tree);