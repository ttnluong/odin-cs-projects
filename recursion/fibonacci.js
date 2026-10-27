const fibs = function(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      result.push(0);
    } else if (i === 1) {
      result.push(1);
    } else {
      result.push(result[i - 1] + result[i - 2]);
    }
  }

  return result;
};

const fibsRec = function (n) {
    console.log("This was printed recursively");

  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const previous = fibsRec(n - 1);
  const next = previous[previous.length - 1] + previous[previous.length - 2];

  return [...previous, next];
};

fibsRec(5);