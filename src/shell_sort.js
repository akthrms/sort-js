const { equalsArray, until } = require("./utils");

const arr = [2, 4, 1, 3, 5];
const len = arr.length;

let h = 0; // 間隔`h`
while (h < len / 9) {
  // `$h_{i + 1} = 3h_{i} + 1$`
  h = h * 3 + 1;
}

while (h > 0) {
  for (const i of until(h, len)) {
    // 間隔`h`で挿入ソート
    const temp = arr[i]; // 挿入する値を退避する
    let j = i; // 挿入する位置
    while (j >= h && arr[j - h] > temp) {
      // 挿入する必要がある場合
      // `h`後ろにズラす
      arr[j] = arr[j - h];
      j -= h;
    }
    // 挿入する
    arr[j] = temp;
  }
  // `h`を再計算
  h = parseInt(h / 3);
}

console.assert(equalsArray(arr, [1, 2, 3, 4, 5]), "shell sort");
