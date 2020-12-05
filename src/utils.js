function to(start, end) {
  return [...Array(end + 1).keys()].slice(start);
}

function until(start, end) {
  return to(start, end - 1);
}

function downTo(start, end) {
  return [...to(end, start)].reverse();
}

function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

console.assert(
  JSON.stringify(to(0, 3)) === JSON.stringify([0, 1, 2, 3]),
  "to()"
);

console.assert(
  JSON.stringify(until(0, 3)) === JSON.stringify([0, 1, 2]),
  "until()"
);

console.assert(
  JSON.stringify(downTo(3, 0)) === JSON.stringify([3, 2, 1, 0]),
  "downTo()"
);

console.assert(
  (() => {
    const arr = [1, 2, 3];
    swap(arr, 0, 2);
    return JSON.stringify(arr) === JSON.stringify([3, 2, 1]);
  })(),
  "swap()"
);

exports.to = to;
exports.until = until;
exports.downTo = downTo;
exports.swap = swap;
