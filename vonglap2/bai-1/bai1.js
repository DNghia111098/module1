let n1 = 0;
let n2 = 1;
let nextTerm;
document.write("Fibonacci Series: ");

for(let i = 1; i <= 10; i++) {
    document.write(n1 + "<br />");
    nextTerm = n1 + n2;
    n1 = n2
    n2 = nextTerm;
}

