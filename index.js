var a = {
  foo: 'bar'
};

var b = {
  foo: 'bar'
};

console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 object có vẻ giống nhau. Viết câu trả lời ở dưới đây.
// Do phép toán === so sánh địa chỉ lưu trữ giá trị của 2 object chứ không so sánh giá trị lưu trữ của chúng.
