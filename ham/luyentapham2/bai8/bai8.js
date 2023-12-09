// function daonguoc(a,b) {
//     for (let i = songuyen.length - 1; i >= 0; i--) {
//         let c = [];
//         c.push(songuyen[i]);
//     }
//     console.log(songuyen);
//     console.log(c);
// }
// let a = +prompt ("Nhập số");
// let b = +prompt ("Nhập số");
// daonguoc(a,b)

let array1 = [2,3,8,6,7];
function daonguoc() {
    let temp;
    for(let i = 0; i < array1.length; i++) {
        for (j = array1.length -1; j > i; j--) {
            if (i + j == array1.length -1) {
                temp = array1[i];
                array1[i] = array1[j];
                array1[j] = temp; 
            }
        }
    }
    document.write(array1)
}
daonguoc()