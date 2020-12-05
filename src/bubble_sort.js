const { equalsArray, swap, until } = require("./utils");

let arr = [2, 4, 1, 3, 5];
let len = arr.length;

for (let i of until(0, len)) {
  // 各要素のインデックスをループ
  for (let j of until(0, len - i)) {
    // 隣り合う要素を比較するためのループ
    // `arr[len - i]`以降の要素は整列済みとなる
    if (arr[j] > arr[j + 1]) {
      // 現在の要素が次の要素より大きい場合は入れ替える
      swap(arr, j, j + 1);
    }
  }
}

console.assert(equalsArray(arr, [1, 2, 3, 4, 5]), "bubble sort");
