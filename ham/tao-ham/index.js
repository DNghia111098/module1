// // Cú pháp tạo hàm

// function writeLog() { // write.log là tên hàm
//     console.log("hello, world"); // Nhiệm vụ của hàm
// }
// // đầu vào(paramenter) đầu ra (return)

// function writeLog2(str) {
//     console.log(str);
// }
// writeLog("hải");
// writeLog2("hải");

// Viết hàm tính tổng 2 số a và b
// Param:  a và b
// Return: a + b

// function sum(a, b) {
//     let c = a + b;
//     return c;
// }

// // Gọi hàm
// let result = sum(10, 20)

// console.log(result);

// //bai1
// function tongle(a) {
//     let b = 0;
//     for (let  i = 0; i < a; i++) {
//         if (i % 2 != 0) {
//            b = b + i;
//            return b
//         }
//     }
// }
// let tongle = tongle(10);
// console.log(tongle);

// function sum(n) {
//     let total = 0;
//     for(let i = 0; i < n; i++) {
//         if(i % 2 != 0) {
//             total += i;
//         }
//     }
//     console.log(total)
// }
// sum(10);

function sum() {
    for ( let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}
sum ();
console.log(sum (10, 20));