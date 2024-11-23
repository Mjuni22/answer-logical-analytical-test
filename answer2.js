class LFU_Cache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.scores = {};
  }

  get(key) {
    if (key in this.cache) {
      this.scores[key] = this._calculateScore(key);
      return this.cache[key];
    }
    return -1;
  }

  put(key, value, weight) {
    if (this.size() >= this.capacity) {
      this.evict();
    }
    this.cache[key] = value;
    this.scores[key] = this._calculateScore(key);
  }

  size() {
    return Object.keys(this.cache).length;
  }

  evict() {
    let minScore = Infinity;
    let minKey = null;
    for (const key in this.scores) {
      if (this.scores[key] < minScore) {
        minScore = this.scores[key];
        minKey = key;
      }
    }
    delete this.cache[minKey];
    delete this.scores[minKey];
  }

  _calculateScore(key) {
    const currentTime = Date.now();
    const lastAccessedTime = this.scores[key] || currentTime;
    return weight / (Math.log(currentTime - lastAccessedTime + 1) + 1);
  }
}

// get: Rata-rata kasus O(1) karena pencarian dalam hash table.
// put: Rata-rata kasus O(1) untuk penyisipan, namun dalam kasus terburuk bisa O(n) jika perlu melakukan evict dan mencari item dengan skor terendah.
