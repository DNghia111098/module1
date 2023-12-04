let sothuc= [5 , 7 , 9 , -5, -8, -10]

for(let i = 0; i < sothuc.leght; i++) {
    if (sothuc[i] < 0) {
        sothuc[i] = sothuc[i] * -1;
    }
}     
console.log(sothuc)