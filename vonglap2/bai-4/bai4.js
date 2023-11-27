let n = parseInt(prompt("Nhập chiều dài: "));
let m = parseInt(prompt("Nhập chiều rộng"));

for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= m; k++) {
        if (i === 1 || k === 1 || i === n || k === m) {
            document.write("*");
        } else {
            document.write('&nbsp;&nbsp;');
        }
    }
    document.write("<br />");
}