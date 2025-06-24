// Number
let num = 42;
console.log(typeof num); // "number"

// BigInt
let big = 1234567890123456789012345678901234567890n;
console.log(typeof big); // "bigint"

// String
let str = "Hello, world!";
console.log(typeof str); // "string"

// Boolean
let isTrue = true;
console.log(typeof isTrue); // "boolean"

// Undefined
let x;
console.log(typeof x); // "undefined"

// Null (có đặc điểm lịch sử nên typeof là "object")
let y = null;
console.log(typeof y); // "object" ❗

// Symbol
let sym = Symbol("id");
console.log(typeof sym); // "symbol"

// Object
let person = { name: "Nam", age: 25 };
console.log(typeof person); // "object"

// Array (là object, nhưng nên kiểm tra bằng Array.isArray)
let arr = [1, 2, 3];
console.log(typeof arr); // "object"
console.log(Array.isArray(arr)); // true ✅

// Function (là object nhưng typeof trả về "function")
function greet() {
  return "Hello!";
}
console.log(typeof greet); // "function"

// Date
let today = new Date();
console.log(typeof today); // "object"

// RegExp
let regex = /hello/i;
console.log(typeof regex); // "object"

// Map
let map = new Map();
console.log(typeof map); // "object"

// Set
let set = new Set();
console.log(typeof set); // "object"

// Promise
let promise = new Promise((resolve, reject) => resolve("done"));
console.log(typeof promise); // "object"

// ---
const user = {
  name: "Nam",
  age: 25,
  city: "Hanoi",
};

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
// name: Nam
// age: 25
// city: Hanoi
Object.keys(user).forEach((key) => {
  console.log(`${key}: ${user[key]}`);
});

Object.values(user).forEach((value) => {
  console.log(value);
});
// Nam
// 25
// Hanoi
Object.entries(user).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

// 🔁 1. map(): Chuyển đổi từng phần tử trong mảng
// Trả về mảng mới có cùng độ dài.
// Dùng để biến đổi giá trị từng phần tử.
const numbers1 = [1, 2, 3];

const doubled = numbers1.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]

// 🔍 2. filter(): Lọc các phần tử thoả điều kiện
// Trả về mảng mới, có thể ngắn hơn hoặc rỗng.
// Dùng để loại bỏ phần tử không cần.
const numbers2 = [1, 2, 3, 4, 5];

const evens = numbers2.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]

// 🧮 3. reduce(): Tính toán/tổng hợp thành một giá trị duy nhất
// Dùng để tính tổng, tạo object, gộp chuỗi, v.v.
const numbers3 = [1, 2, 3, 4];

const sum = numbers3.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 10

// 🧪 forEach(): Duyệt qua từng phần tử (không trả mảng mới)
[1, 2, 3].forEach((num) => console.log(num));

// 🔎 find(): Trả về phần tử đầu tiên thoả điều kiện
const users = [{ id: 1 }, { id: 2 }];
const found = users.find((user) => user.id === 2);
console.log(found); // {id: 2}

// 📍 findIndex(): Trả về index đầu tiên thoả điều kiện
const index = users.findIndex((user) => user.id === 2);
console.log(index); // 1

// ❓ some(): Trả về true nếu ít nhất một phần tử thỏa điều kiện
[1, 2, 3].some((n) => n > 2); // true

// ✅ every(): Trả về true nếu tất cả phần tử thỏa điều kiện
[1, 2, 3].every((n) => n > 0); // true

// | Hàm         | Trả về           | Dùng để                          |
// | ----------- | ---------------- | -------------------------------- |
// | `map()`     | Mảng mới         | Biến đổi giá trị                 |
// | `filter()`  | Mảng mới         | Giữ lại phần tử thoả điều kiện   |
// | `reduce()`  | Giá trị duy nhất | Tổng hợp, tính toán              |
// | `forEach()` | `undefined`      | Duyệt mảng, không cần return     |
// | `find()`    | 1 phần tử        | Tìm phần tử đầu tiên             |
// | `some()`    | true/false       | Có ít nhất 1 phần tử đúng không? |
// | `every()`   | true/false       | Tất cả phần tử có đúng không?    |
