tienLai.addEventListener("click" , function(){
    let soTien = + document.getElementById("soTien").value;
    let laiSuat = +document.getElementById("laiSuat").value;
    let thoiHan = +document.getElementById("thoiHan").value;
    let soKy = + document.getElementById("soKy").value;

    let lai;

    lai = soTien * Math.pow(( 1 + laiSuat / 100 / soKy ),( soKy * thoiHan ));
    document.getElementById("chuongTrinh").innerHTML = "Số tiền bạn gửi là: " +soTien + ", với lãi suất " +laiSuat + " %. Sau thời gian " + thoiHan + " năm, với số kỳ nhận lãi là " +soKy + "lần/ năm . Số tiền gốc và lãi bạn nhận được là: " +lai;
})