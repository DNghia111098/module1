function bankinh(a) {
    document.write("Có diện tích là: " + 3.14 * a * 2);
    document.write("Có chu vi là: " + 3.14 * (a * a));
}
let a = +prompt("Nhập bán kính");
bankinh(a);