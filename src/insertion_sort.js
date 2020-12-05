const { equalsArray, swap, until } = require("./utils");

let arr = [2, 4, 1, 3, 5];
let len = arr.length;

for (let i of until(0, len)) {
  // 各要素のインデックスをループ
  let temp = arr[i]; // 対象要素（一時的に保持する）
  let j = i; // 対象要素のインデックス（`0`に向けて減らす）

  while (0 < j && temp < arr[j - 1]) {
    // 整列済みでない場合は現在の要素と前の要素を入れ替える
    swap(arr, j, j - 1);
    // `0`に向けて減らす
    j--;
  }

  // 対象の要素を挿入する
  arr[j] = temp;
}

console.assert(equalsArray(arr, [1, 2, 3, 4, 5]), "insertion sort");
