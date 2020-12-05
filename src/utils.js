/**
 * `arr1`と`arr2`が等しいかどうかを返す
 *
 * ```js
 * equalsArray([1, 2, 3], [1, 2, 3]) == true
 * ```
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {boolean}
 */
function equalsArray(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

/**
 * `start`から`end`までの配列を返す（`end`を含む）
 *
 * ```js
 * to(0, 3) == [0, 1, 2, 3]
 * ```
 *
 * @param {number} start
 * @param {number} end
 * @returns {Array<number>}
 */
function to(start, end) {
  return [...Array(end + 1).keys()].slice(start);
}

/**
 * `start`から`end`までの配列を返す（`end`を含まない）
 *
 * ```js
 * until(0, 3) == [0, 1, 2]
 * ```
 *
 * @param {number} start
 * @param {number} end
 * @returns {Array<number>}
 */
function until(start, end) {
  return to(start, end - 1);
}

/**
 * `end`から`start`までの配列を返す
 *
 * ```js
 * downTo(3, 0) == [3, 2, 1, 0]
 * ```
 *
 * @param {number} start
 * @param {number} end
 * @returns {Array<number>}
 */
function downTo(start, end) {
  return [...to(end, start)].reverse();
}

/**
 * `arr[index1]`と`arr[index2]`の要素を入れ替える
 *
 * ```js
 * const arr = [1, 2, 3]
 * swap(arr, 0, 2)
 * arr == [3, 2, 1]
 * ```
 *
 * @param {Array} arr
 * @param {number} index1
 * @param {number} index2
 */
function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

/**
 * `arr`の末尾に`elem`を追加した配列を返す
 *
 * ```js
 * cons([1, 2], 3) == [1, 2, 3]
 * ```
 *
 * @param {Array} arr
 * @param {*} elem
 * @returns {Array}
 */
function cons(arr, elem) {
  return [...arr, elem];
}

console.assert(equalsArray([0, 1, 2, 3], [0, 1, 2, 3]), "equalsArray()");

console.assert(equalsArray(to(0, 3), [0, 1, 2, 3]), "to()");

console.assert(equalsArray(until(0, 3), [0, 1, 2]), "until()");

console.assert(equalsArray(downTo(3, 0), [3, 2, 1, 0]), "downTo()");

console.assert(
  (() => {
    const arr = [1, 2, 3];
    swap(arr, 0, 2);
    return equalsArray(arr, [3, 2, 1]);
  })(),
  "swap()"
);

console.assert(equalsArray(cons([1, 2], 3), [1, 2, 3]), "cons()");

exports.equalsArray = equalsArray;
exports.to = to;
exports.until = until;
exports.downTo = downTo;
exports.swap = swap;
exports.cons = cons;
