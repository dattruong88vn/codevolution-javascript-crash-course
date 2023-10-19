/**
 * Thông thường:
 *  - khai báo: function sum(a, b, c) { return a + b + c}
 *  - thực thi: sum(2, 3, 5)
 *
 * Currying:
 *  - Thực thi: sum(2)(3)(5)
 */
function sum(a, b, c) {
  return a + b + c;
}

function execute(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

console.log(execute(sum)(2)(3)(5));
const fn = execute(sum);
const add2 = fn(2);
const add3 = add2(3);
const add5 = add3(5);
console.log(add5);

/**
 * - Chia function với nhiều tham số thành nhiều function,
 * mỗi funcion nhận vào 1 tham số.
 *
 * - Mục đích tái sử dụng các function
 */
