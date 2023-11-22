let a = 1;
let b = 0;
let countFibo = 20 ;
let tong = 0;

for(i = 1; i <= countFibo; i++){
    console.log(a);
    c = a + b;
    a = b;
    b = c;
    tong += c
}

document.write("Tổng của 20 số đầu tiên trong dãy FIbonacci là: " + tong);