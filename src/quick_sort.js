const { equalsArray, until } = require("./utils");

/**
 * クイックソート
 * @param {Array} arr
 * @returns {Array}
 */
function quickSort(arr) {
  let len = arr.length;

  if (len <= 1) {
    return arr;
  }

  // 先頭要素をピボットとする
  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i of until(1, len)) {
    // ピボットと比較して`2`つの配列に分割
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // 再帰的に分割・結合する
  let l = quickSort(left);
  let r = quickSort(right);

  return [...l, pivot, ...r];
}

let arr = [2, 4, 1, 3, 5];

console.assert(equalsArray(quickSort(arr), [1, 2, 3, 4, 5]), "quick sort");
