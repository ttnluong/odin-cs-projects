const mergeSort = function(arr) {
    if (arr.length <= 1) {
        return arr
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right))

}

const merge = function (left, right) {
  const result = [];
  let i = 0; // pointer for left
  let j = 0; // pointer for right

  // Take the smaller front item until one side runs out
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add leftovers (only one side will have any)
  return [...result, ...left.slice(i), ...right.slice(j)];
};

module.exports = mergeSort;