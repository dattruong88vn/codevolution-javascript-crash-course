function normalFunction() {
  console.log(1);
  console.log(2);
}
// normalFunction();

function* generatorFunction() {
  yield 1;
  yield 2;
}

const genertorObject = generatorFunction();
// console.log(genertorObject);
for (let item of genertorObject) {
  console.log(item);
}

/**
 * 1. Normal function:
 *   - khi thực thi sẽ chạy tất cả các câu lệnh
 *   - Muốn dừng lại ở một câu lệnh bất kỳ phải sử dụng return
 *   - Các câu lệnh phía sau sẽ ko được thực hiện
 *
 * 3. Generator Funcion:
 *   - Khi khai báo thêm dấu * sau chữ function
 *   - Dùng từ khoá yield trước mỗi câu lệnh.
 *   - Trả về một generatorObject: có kiểu dữ liệu là Generator và cũng là một iterator
 */
