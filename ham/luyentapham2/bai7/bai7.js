function daonguoc(x,y){
    let temp;
    temp = x;
    x = y
    y = temp
    document.write("x là: " + x + "<br/>")
    document.write("y là: " +  y)
}
let x = +prompt("nhập x");
let y = +prompt("nhập y");
daonguoc(x,y)