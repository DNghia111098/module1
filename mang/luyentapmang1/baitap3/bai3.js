let array1 = [13, 14, 25, 30, 40];
let max = array1[0];
let tong = 0;
for(i = 0; i < array1.length; i++) {
    if(max < array1[i]) {
        max = array1[i];
    }
    tong += array1[i];
}
console.log(max);
console.log(tong / array1.length)
 