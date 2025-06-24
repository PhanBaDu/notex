// 🏗️ 1. Khai báo class và tạo object

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person("Nam", 25);
person1.greet(); // Hi, I'm Nam and I'm 25 years old.
// 🧬 2. Kế thừa (Inheritance)

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age); // gọi constructor cha
    this.studentId = studentId;
  }

  study() {
    console.log(`${this.name} is studying.`);
  }
}

const student1 = new Student("Lan", 20, "SV001");
student1.greet(); // Kế thừa từ Person
student1.study(); // Lan is studying.
// 🔒 3. Getter / Setter

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    this.width = value;
    this.height = 1; // ví dụ đơn giản
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // 50

rect.area = 20;
console.log(rect.width); // 20
console.log(rect.height); // 1
// 🙈 4. Private fields (#) (ES2022+)

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(1000);
console.log(acc.getBalance()); // 1000
// acc.#balance = 0; // ❌ Error: Private field
// 🧰 5. Static method / property

class MathUtils {
  static PI = 3.14159;

  static square(x) {
    return x * x;
  }
}

console.log(MathUtils.PI);       // 3.14159
console.log(MathUtils.square(5)); // 25
// 🧱 Tổng hợp cú pháp class

class ClassName {
  // constructor
  constructor(...) {}

  // phương thức thường
  methodName() {}

  // getter / setter
  get prop() {}
  set prop(val) {}

  // static method
  static staticMethod() {}

  // private field (dùng dấu #)
  #privateField;
}
// 📘 Gợi ý học nâng cao:

// Abstraction: Trừu tượng hóa logic bằng class
// Encapsulation: Ẩn chi tiết bên trong object
// Inheritance: Kế thừa class cha
// Polymorphism: Ghi đè phương thức (method overriding)
// Nếu bạn muốn mình viết thêm ví dụ về 4 tính chất OOP hoặc làm 1 mini project bằng class (quản lý sinh viên, tài khoản ngân hàng, v.v.), cứ nói nhé!