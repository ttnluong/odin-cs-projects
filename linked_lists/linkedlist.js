export let LinkedList = class {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return
        }
        
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current.next !== null) {
            count++;
            current = current.next;
        }

        return count;
    }

    getHead() {
        if (this.head === null) return undefined;
        return this.head.value;
    }

    tail() {
        if (this.head === null) return undefined;
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        };
        return current.value;
    }

    at(index) {
        if (index < 0) return undefined;
        let current = this.head;
        for (let i = 0; i < index && current !== null ; i++) {
            current = current.next;
        };

        return current?.value;
    }

    pop() {
        if (this.head === null) return undefined;
        let removed = this.head;
        this.head = removed.next;
        return removed.value;
    }

    contains(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    findIndex(value) {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }

    toString() {
        if (this.head === null) return "";
        let current = this.head;
        let string = "";
        while (current !== null) {
            string += `( ${current.value} ) -> `;
            current = current.next;
        }
        return string + "null";
    }
}

let Node = class {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
