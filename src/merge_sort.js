const { equalsArray } = require("./utils");

/**
 * 再帰的に配列を分割する
 * @param {Array} arr
 * @returns {Array}
 */
function mergeSort(arr) {
  let len = arr.length;

  if (len <= 1) {
    return arr;
  }

  // 整列されていない配列を`2`つに分割する
  let mid = Math.floor(len / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // 再帰的に分割する
  let l = mergeSort(left);
  let r = mergeSort(right);

  // 分割した配列をマージして整列済み配列とする
  return merge(l, r);
}

/**
 * `left`と`right`をマージする
 * @param {Array} left
 * @param {Array} right
 * @returns {Array}
 */
function merge(left, right) {
  let merged = []; // マージ済み配列
  let indexL = 0; // `left`の先頭インデックス
  let indexR = 0; // `right`の先頭インデックス

  while (indexL < left.length && indexR < right.length) {
    // `left`と`right`の先頭の要素を比較してより小さい方をマージ済み配列に追加する
    // どちらかの配列が終端に達するまで繰り返す
    if (left[indexL] < right[indexR]) {
      merged.push(left[indexL]);
      indexL++;
    } else {
      merged.push(right[indexR]);
      indexR++;
    }
  }

  if (indexL < left.length) {
    // 余った要素をマージ済み配列の末尾に追加する
    return merged.concat(left.slice(indexL));
  } else {
    return merged.concat(right.slice(indexR));
  }
}

let arr = [2, 4, 1, 3, 5];

console.assert(equalsArray(mergeSort(arr), [1, 2, 3, 4, 5]), "merge sort");
