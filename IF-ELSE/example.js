// let gioitinh = "nu";
// if(gioitinh === "nam") { 
//     console.log("giới tính nam")
    
// }
// else {
//     if (gioitinh === "nu") {
//         console.log("nữ")
//     }
//     else {
//         console("bede");
//     }
// }

// Lệnh if: Sử dụng lệnh if để xác định một khối mã JavaScript sẽ được thực thi nếu điều kiện chỉ ra là đúng.

// ex1:
// let time = 8;
// if(time == "8") {
//     console.log("good");
// }

//ex2:
// let age = 18;
// if(age == 18) {
//     console.log("Đủ tuổi");
// }


//  Lệnh else: Sử dụng phẩn mở rộng else để xác định một khối mã được thực thi nếu điều kiện là sai.

//ex1:
// let time = 8;
// if(time == 8) {
//     console.log("good");
// } else {
//     console.log("Tạm");
// }

// Lệnh else-if: Sử dụng mở rộng else if để chỉ định một điều kiện mới nếu các điều kiện trước đó là sai.

//Ex1:

// let time = 6;
// if(time == 7) {
//     console.log("no good");
// } else if(time == 8) {
//     console.log("good");
// } else {
//     console.log("good bye");
// }


//[Bài tập] Tính chỉ số cân nặng của cơ thể
//Chỉ số khối cơ thể (Body mass index-BMI) là một thước đo sức khoẻ dựa trên cân nặng và chiều cao. Nó được tính bằng cách lấy cân nặng đơn vị tính kilogam chia cho bình phương của chiều cao đơn vị tính mét.
//cách 1

let bmi = 65 / (1.75 ^ 2);
if (bmi < 18) {
    console.log("underweight");
}
else if (bmi < 25) {
    console.log("Normal");
}
else if (bmi < 30) {
    console.log("overweight");
}
else {
    console.log("obese");
}
 

