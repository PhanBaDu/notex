// 1. Array Literal (Tạo mảng)
const arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]
// 2. Spread Operator (...) trong mảng
// Dùng để trải mảng hoặc đối tượng:

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]
// 3. Rest Parameter (...) trong hàm
// Thu thập tất cả tham số còn lại:

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6
// 4. Spread trong object (ES6+)
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }
// 5. Destructuring + Rest trong mảng hoặc object
// Mảng:

const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest); // [2, 3, 4]
// Object:

const { a, ...restObj } = { a: 1, b: 2, c: 3 };
console.log(a); // 1
console.log(restObj); // { b: 2, c: 3 }
