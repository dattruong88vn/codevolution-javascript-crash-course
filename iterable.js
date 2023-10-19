/**
 * 1. Iterable (tính lặp) là gì?
 *
 *  - Một object được tích hợp các giao thức lặp thì được gọi là có tính lặp
 *  - Một object có tính lặp thì nó phải được tích hợp một method thông qua key [Symbol.iterator]
 *     obj = {
 *      [Symbol.iterator]: function() {...}
 *     }
 *  - Method này không nhận bất cứ một tham số nào, và phải return về một object, object này phải tuân thủ các interator protocol (giao thức trình vòng lặp).
 *  - iterator protocol (giao thức trình vòng lặp) quyết định khi nào một object là một iterator (trình vòng lặp)
 *  - Object phải có một phương thức next, trả về một object gồm 2 thuộc tính:
 *     + value: thể hiện element hiện tại
 *     + done: có giá trị boolean cho biết còn element nào không
 */

const object = {
  [Symbol.iterator]: function () {
    let step = 0;
    const interator = {
      next: function () {
        step++;
        if (step === 1) {
          return {
            value: "Thanh",
            done: false,
          };
        } else if (step === 2) {
          return {
            value: "Dat",
            done: false,
          };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
    return interator;
  },
};

for (let item of object) {
  console.log(item);
}
