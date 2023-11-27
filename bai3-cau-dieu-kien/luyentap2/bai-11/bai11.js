let a = +prompt(Nhập số lương);
let tienthue

if (a > 0 && a < 500) {
    tienthue = (a*5)/100;
} else if (a >= 500 && a < 1000) {
    tienthue = (a*10)/100;
} else if (a >= 1000 && a < 2000) {
    tienthue = (a*20)/100;
} else if (a >= 2000 && a < 3000) {
    tienthue = (a*30)/100;
} else {
    tienthue = (a*35)/100;
}

alert("tiền thuế bạn nạp là : " + tienthue + "tiền lương sau thuế : " + (a - tien tienthue));
