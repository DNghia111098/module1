function songuyen(a) {
    let tong = 1
    for (let i = 1; i <= a; i++) {
        tong = tong * i;
    }
    document.write(tong);
}
let a = +prompt("Nhập số");
songuyen(a);

