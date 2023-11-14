// let name = document.getElementById("name");

// biến 
let btn = document.getElementById ("mybtn");

// tạo sự kiện
btn.addEventListener("click", function() { 
    // lấy giá trị từ ô Input có ID =  name và gán lại cho biến nameInput
    nameInput = document.getElementById("name").value;
    alert(nameInput);
});