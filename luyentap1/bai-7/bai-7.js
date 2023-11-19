let sophut = +prompt("Nhập số phút");
let cuocDT

if ( sophut <= 50 && sophut > 0 ) {
    cuocDT = sophut * 3000;
    alert("tiền cước điện thoại của bạn là: " + cuocDT)
} else if ( 50 < sophut && sophut <= 200 ) {
    cuocDT = sophut * 2000;
    alert("tiền cước điện thoại của bạn là: " + cuocDT)
} else if ( 200 < sophut && sophut <= 300 ) {
    cuocDT = sophut * 1500;
    alert("tiền cước điện thoại của bạn là: " + cuocDT)
} else {
    cuocDT = sophut * 1000;
    alert ("tiền cước điện thoại của bạn là: " + cuocDT)
}