function invertTree(root) {
  // 如果沒有節點就停止，返回 null
  if (!root) return null;
  if (root?.length > 100) throw new Error("The input root is too large.");
  if (root?.some((val) => val !== null && (val < -100 || 100 < val)))
    throw new Error("The element of the input tree must be between [-100, 100].");

  const cloned = root.slice();

  let idx = 0;
  let stack = [];

  // 按照二元素排列方式排列
  while (cloned.length > 0) {
    const len = Math.pow(2, idx);

    stack[idx] = cloned.splice(0, len);

    // 如果有空的節點沒補齊, 則將它補齊
    if (len > stack[idx].length) {
      new Array(len).fill(null).forEach((_, i) => {
        if (stack[idx][i] === undefined) {
          stack[idx][i] = null;
        }
      });
    }

    idx++;
  }

  // 將陣列反轉後, 在平坦化, 最終回傳
  return stack.map((arr) => arr.reverse()).flat();
}

const input1 = [5, 3, 8, 1, 7, 2, 6, 100, 3, -1];
const output1 = invertTree(input1);

console.log("input: ", input1);
console.log("output: ", output1);

const input2 = [5, 3, 8, 1, 7, 2, 6];
const output2 = invertTree(input2);

console.log("input: ", input2);
console.log("output: ", output2);

const input3 = [6, 8, 9];
const output3 = invertTree(input3);

console.log("input: ", input3);
console.log("output: ", output3);

const input4 = [];
const output4 = invertTree(input4);

console.log("input: ", input4);
console.log("output: ", output4);

// My test

const input5 = [5, 7, 9, 2, null, null, 20, null, null, null, null, null, null, 16];
const output5 = invertTree(input5);

console.log("input: ", input5);
console.log("output: ", output5);
