// function nhapten(a) {
//     let array1 = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe' ,'Regulu'];
//     let array2 = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major' ,'Leo'];
//     let b = false
//     for (i = 0; i < array1.length; i++) {
//         if(a == array1[i]){
//             for(j = 0 ; j <array2.length; j++){
//                 j = i 
//                 document.write(array2[j])
//                 break;
//             }
//             b = true;
//         }
//     }
//     if(b) {

//     } else {
//         document.write('không có')
//     }
// }
// let a = prompt("nhập vào ngôi sao")
// Document.write(nhapten(a))

// Tạo mảng ngôi sao và mảng chòm sao tương ứng
const stars = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
const constellations = ["Ursa Minor", "Taurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

// Hàm tìm chòm sao dựa trên tên ngôi sao
function findConstellation(starName) {
    const lowerCaseStarName = starName.toLowerCase();

    for (let i = 0; i < stars.length; i++) {
        if (lowerCaseStarName === stars[i].toLowerCase()) {
            return constellations[i];
        }
    }

    return null;
}
function checkStar() {
    // Sử dụng hộp thoại prompt để nhập tên ngôi sao từ người dùng
let input = document.getElementById('star').value;

// Gọi hàm và hiển thị kết quả trên màn hình
const constellation = findConstellation(input);
if (constellation) {
    alert(`Ngôi sao ${input} thuộc chòm sao ${constellation}.`);
} else {
    alert(`Không tìm thấy thông tin cho ngôi sao ${input}.`);
}
}
