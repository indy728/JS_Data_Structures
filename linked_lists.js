// List Constructor Function
function LinkedList() {
    this.head = null;
    this.tail = null;
}

// Node Constructor Function
function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

// Function to add a node to the head of a linked list   
LinkedList.prototype.addToHead = function(value) {
    var newNode = new Node(value, this.head, null);
    if (this.head) {
        this.head.prev = newNode;
    }
    else {
        this.tail = newNode;
    }
    this.head = newNode;
}

// Function to add a node to the tail of a linked list   
LinkedList.prototype.addToTail = function(value) {
    var newNode = new Node(value, null, this.tail);
    if (this.tail) {
        this.tail.next = newNode;
    }
    else {
        this.head = newNode;
    }
    this.tail = newNode;
}

// Function to remove the head node of a linked list and return its value   
LinkedList.prototype.removeHead = function() {
    if (!this.head) return null;
    var val = this.head.value;
    this.head = this.head.next
    if (this.head) {
        this.prev = null;
    }
    else {
        this.tail = null;
    }
    return val;
}

// Function to remove the tail node of a linked list and return its value   
LinkedList.prototype.removeTail = function() {
    if (!this.tail) return null;
    var val = this.tail.value;
    this.tail = this.tail.prev
    if (this.tail) {
        this.next = null;
    }
    else {
        this.head = null;
    }
    return val;
}

// Function to remove a specific node from a list, provided by reference   
LinkedList.prototype.removeNode = function(node) {
    if (node === this.head) {
        return this.removeHead();
    }
    else if (node === this.tail) {
        return this.removeTail();
    }
    else {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        return node.value;
    }
}

// Function to search for a value in a linked list
LinkedList.prototype.searchValue = function(searchValue) {
    var node = this.head;

    while(node){
        if (node.value === searchValue) return node.value;
        node = node.next;
    }
    return null;
}

// Function to search for a value in a linked list, remove the node, return the value
LinkedList.prototype.searchValueAndRemoveNode = function(searchValue) {
    var node = this.head;

    while(node){
        if (node.value === searchValue) {
            return this.removeNode(node);
        }
        node = node.next;
    }
    return null;
}

// Function to search for a value in a linked list and return an array of all indexes of its occurence
LinkedList.prototype.indexOf = function (value) {
    let arr = [];
    let i = 0;
    var node = this.head;
    
    while(node){
        if (node.value === searchValue) {
            arr.push(i);
        }
        node = node.next;
        i++;
    }
    return arr;
}