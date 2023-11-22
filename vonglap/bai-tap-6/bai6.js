let a = 0;
let Sum = 0;
let len = 30; // length

for ( let i = 0 ; i < len; i++) {
    a += 7;
    document.write(+ a +"<br />");
    Sum += a;
}

document.write('</br>' + "Tổng của 30 số tự nhiên đầu tiên chia hết cho 7 là: " + Sum);