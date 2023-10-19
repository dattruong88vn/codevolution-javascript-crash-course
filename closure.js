function outer() {
  let counter = 0;

  function inner() {
    counter += 1;
    console.log(counter);
  }

  return inner;
}

const fn = outer();
fn();
fn();
fn();

/**
 * Function outer sau khi thực thi xong sẽ return về function inner được lưu vào biến fn.
 * Khi fn thực thi 3 lần thì vẫn có thể access vào biến counter nằm trong scope của function outer.
 * Mặc dù function outer đã thực thi xong.
 * Giá trị của biến counter vẫn được kết nối liên tục giữa các lần thực thi funciton fn.
 */

/**
 * Closure là gì?
 * - Khi return 1 function (inner fn) từ một function khác (outer fn), thì ngoài fn inner chúng ta sẽ nhận được scope của fn outer.
 * - Có nghĩa là function inner có thể truy xuất đến tất cả các biến trong scope của function outer.
 * - Và bộ nhớ của scope này được liên kết với nhau giữa các lần thực thi funcition inner.
 *
 */
