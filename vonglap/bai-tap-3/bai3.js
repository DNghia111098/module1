let a = 0;
let b = 1;
let countFibo = 20;

document.write("20 số Fibonacci đầu tiên là :")

for (let i = 0; i < countFibo; i++) {
    document.write(a);
    let temp = a + b;
    a = b;
    b = temp;
}