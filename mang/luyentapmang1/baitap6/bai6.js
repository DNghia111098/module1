let songuyen = [5, 8, 7, 15, 19, 25, 30, 18, 21, 24];
let V = 5;
let isInArray = false;
for(let i = 0; i < songuyen.length; i++) {
    if (songuyen[i] === V) {
       isInArray = true;
       break;
    }
}
if(isInArray) {
    console.log("V is in the array")
} else {
    console.log("V is not in the array")
}   

