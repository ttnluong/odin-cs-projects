
export class HashMap {
    constructor() {
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.buckets = Array.from({ length: this.capacity }, () => []);
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }

    set(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        
        for (const entry of bucket) {
            if (entry.key === key) {
                entry.value = value;
                return;
            }
        }
        bucket.push({ key, value });
    }

    get(key) {
        const bucket = this.buckets[this.hash(key)];

        for (const entry of bucket) {
            if (entry.key === key) {
                return entry.value;
            }
        }
        return undefined;
    }

    has(key) {
        const bucket = this.buckets[this.hash(key)];

        for (const entry of bucket) {
            if (entry.key === key) {
                return true;
            }
        }
        return false;
    }

    remove(key) {
        const bucket = this.buckets[this.hash(key)];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
            bucket.splice(i, 1); 
            return true;
            }
        }
        return false;
    }

    length() {
        let count = 0;
        for (const bucket of this.buckets) {
            count += bucket.length;
        }
        return count;
    }

    clear() {
        this.buckets = Array.from({ length: this.capacity }, () => []);;
    }

    keys() {
        let keys = [];
        for (const bucket of this.buckets) {
            for (const entry of bucket) {
            keys.push(entry.key);
            }
        }
        return keys;
    }

    values() {
        let values = [];
        for (const bucket of this.buckets) {
            for (const entry of bucket) {
            values.push(entry.value);
            }
        }
        return values;
    }

    entries() {
        let entries = [];
        for (const bucket of this.buckets) {
            for (const entry of bucket) {
            entries.push([entry.key, entry.value]);
            }
        }
        return entries;
    }
}