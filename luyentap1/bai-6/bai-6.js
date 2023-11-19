let doanhso = +prompt("nhập doanh số");
let hoahong1 = 5 / 100;
let hoahong2 = 10 / 100;
let hoahong3 = 20 / 100;

if (doanhso >= 100 && doanhso < 200) {
    alert(doanhso *= hoahong1);
} else if (doanhso >= 200 && doanhso < 300) {
    alert(doanhso *= hoahong2);
} else if (doanhso >= 300) {
    alert(doanhso *= hoahong3);
} else {
    alert("Bạn không đủ doanh số");
}