const { equalsArray, swap, until } = require("./utils");

let arr = [2, 4, 1, 3, 5];
let len = arr.length;

for (let i of until(0, len)) {
  // 各要素のインデックスをループ
  let minIndex = i; // 最小要素のインデックス（仮として`i`を設定）
  for (let j of until(i + 1, len)) {
    // 最小要素を求めるためのループ
    // `i`より小さい要素は整列済み
    if (arr[minIndex] > arr[j]) {
      minIndex = j;
    }
  }
  swap(arr, i, minIndex);
}

console.assert(equalsArray(arr, [1, 2, 3, 4, 5]), "selection sort");
