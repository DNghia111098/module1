let a = +prompt("nhập a");
let b = +prompt("nhập b");
let c = +prompt("nhập c");
let delta = (b*b) - (4 * a * c)
let (delta > 0) {
    alert (`ta có 2 nghiệm phân biệt x1 = ${(-b Math.sqrt(delta))/(a * 2)} và x2= ${(-b - Math.sqrt(delta))/(a * 2)}`)
} else if (delta == 0) {
    alert ("phương trình có nghiệm kép x1 = x2 =" + ((-b)/(2*a)))
} else {
    alert ("Phương trình vô nghiệm")
}