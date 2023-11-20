let n = parseFloat(prompt("Nhập số điện của bạn: "));

if (n > 20) {
    a = n - 20;
    c = (a * 200) + (15 * 400) + (5 *600) + 25000;
    alert (c);
} else if (n < 20) {
    a = n - 5;
    c = (a * 400) + (5 * 600) + 25000;
    alert (c);
} else if (n < 5) {
    c = (n * 600) + 25000;
    alert (c);
}