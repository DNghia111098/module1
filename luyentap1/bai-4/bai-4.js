// let a = +prompt("nhập a");  
// let b = +prompt("nhập b");
// let c = +prompt("nhập c");

// if (a >= b && a >= c) {
//     console.log("a lon nhat");
// } else if (b >= a && b >= c) {
//     console.log("b lon nhat");
// } else {
//     console.log("c lon nhat");
// }

let a = parseInt(prompt("nhập a"));  
let b = parseInt(prompt("nhập b"));
let c = parseInt(prompt("nhập c"));

// if (a >= b && a >= c) {
//     console.log("a lon nhat");
// } else if (b >= a && b >= c) {
//     console.log("b lon nhat");
// } else {
//     console.log("c lon nhat");
// }

if (a >= b && a >= c) {
    max_num = a;
} else if (b >= a && b >= c) {
    max_num = b;
} else {
    max_num = c;
}
// templace string ( cách gộp)
console.log(`${max_num} là giá trị lớn nhất`)