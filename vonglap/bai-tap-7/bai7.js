for (i = 0; i < 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        document.write("FizzBuss" + "<br />")
    } else if (i % 3 == 0) {
        document.write("Fizz" + "<br />")
    } else if (i % 5 == 0) {
        document.write("Buss" + "<br />")
    } else {
        document.write(i + "<br />")
    }
    
}