// Define a Node constructor function
function Node(value) {
    this.value = value;
    this.parent = null;
    this.children = [];
}

// Create some nodes
let rootNode = new Node('root');
let childNode1 = new Node('child1');
let childNode2 = new Node('child2');

// Set up the hierarchy
childNode1.parent = rootNode;
childNode2.parent = rootNode;

// Add children to the root node
rootNode.children.push(childNode1);
rootNode.children.push(childNode2);

// Example with mainOutput and lastOutput
let mainOutput = new Node('mainOutput');
let lastOutput = new Node('lastOutput');

mainOutput.parent = lastOutput; // Assigning lastOutput as the parent of mainOutput
