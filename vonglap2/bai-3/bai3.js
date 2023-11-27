let N
let x
let y
N = +prompt("Nhập số: ")

for (y = 1; y <= N; y++) {   
    document.write("<br />"); 
    for (x = 1; x <= y; x++){        
        document.write("*");
    }
}
for (y = N; y >= 1; y--) {   
    document.write("<br />"); 
    for (x = 1; x <= y; x++){        
        document.write("*");
    }
}

for (y = 1; y <= N; y++) {   
    for (x = 1; x <= N; x++){
        if(x <= N - y) {
            document.write('  ')
        }else{
            document.write("*")
        }        
    }
    document.write("<br />")
}


for (y = 1; y <= N; y++) {   
    for (x = 1; x <= N; x++){
        if(x <y) {
            document.write('  ')
        }else{
            document.write("*")
        }        
    }
    document.write("<br />")
}
