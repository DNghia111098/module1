// let a = +prompt("Nhập a");
// let b = prompt("Nhập b");

// if (a % b == 0) {
//     console.log("a chia hết cho b");
// } else {
//     console.log ("a không chia hết cho b");
// 

kt.addEventListener("click" , function() {
    let a = +document.getElementById(soA).value;
    let b = +document.getElementById(soB).value;
    
    if ( a % b == 0) {
    document.getElementById("hienthi").innerHTML= " a chia hết cho b";
    } else { 
    document.getElementById("hienthi").innerHTML= " a không chia hết cho b";
    }
})