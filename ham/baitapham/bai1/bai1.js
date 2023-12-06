function isprime(n){
    let flag = 1;

    if (n <2) return flag = 0; 
    
    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    let i = 2;
    while(i <n){
        if( n%i==0 ) {
            flag = 0;
            break; 
        }
        i++;
    }

    return flag;
}

let n= prompt("Nhap so tu nhien= ");
    

let check = isprime(n);

if( check == 1 ) document.write(n + " là số nguyên tố");
else document.write(n + " không phải là số nguyên tố");