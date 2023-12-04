// cách 1: Dấu []
// let array1 = [] // Khai báo 1 mảng rỗng
// let array1 = [1, "dat", 18, [29, "Ha Noi"]]; // Khai báo mảng có giá trị
// console.log(array1);

// // Cách 2: new Array()
// // let array2 = new Array();
// let array2 = new Array(1, "Dat", 18, "Ha Noi") // Khai báo mảng có giá trị
// console.log(array2);

//Chiều dài mảng
// let array1 = [1, "Dat", 18, [29, "Ha Noi"]];

// console.log(array1.length); // Chiều dài của mảng array1
// console.log(array1[array1.length - 1).length]; // Chiều dài của phần tử mảng trong

// // Truy cập các phần tử trong mảng
// let array1 = [1, "Dat", 18, [29, "Ha Noi"]];

// console.log(array1[1]); // Dat
// console.log(array1[3][1]); // Ha Noi
// console.log(array1[array1.length - 1]); // [29, "Ha Noi"] Để lấy phần tử cuối lenght - 1

//Sử dụng for..in
// let array1 = [1, "Dat", 18, [29, "Ha Noi"]];
// for (let index in array1) {
//     console.log(array1[index]);
// }

// // Duyệt mảng bằng for thường
// let array1 = [1, "Dat", 18, [29, "Ha Noi"]];
// for (let i = 0, i < array1.lenght; i++;) {
//     console.log(array1[1]);
// }

// // Duyệt mảng ngược 
// let array1 = [1, "Dat", 18, [29, "Ha Noi"]];
// for (let i = array1.length - 1; i >= 0, i--) {
//     console.log(array1[i]);
// }


 
// let array1 = [1, "dat", 18, [29, "Ha Noi"]];
// array1.push("Hue");//unshift thêm phần tử vào đầu máng
// array1.unshift("Da Nang");//unshift thêm phần tử vào đầu máng
// console.log(array1);

// // Hàm map() duyệt mảng. tương đương sài forEach
// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// let index = seas.indexOf('North Sea'); // Tìm giá trị cần tìm, Nếu k tồn tại trong mảng thì sẽ trả về - 1
// seas.map(function(sea) {
//     console.log(sea);
// })

// pop() xóa ptu ở cuối mảng
// shift() xóa ptu ở đầu mảng

//Update: array[i] = value;
// Sắp xếp mảng theo trình tự A -Z. array.sort()
// Đảo ngược mảng. array.reverse()


// Thêm tại vị trí 1 , không xóa ptu nào. array.splice(), vị trí thaty thế , 'ptu thay thế'
// let moths = ['jan', 'Marth', 'April', 'June'];
// moths.splice(2, 1, 'Feb');
// console.log(moths);

// let moths = ['jan', 'Marth', 'April', 'June'];
// let moths2 = ['June', 'July', 'Aus'];
// //Nối mảng
// moths.concat(moths2);
// console.log(moths.concat(moths2));


// Bài tập , Thêm 1 ptu vào cuối mảng. Không dùng Hàm
 