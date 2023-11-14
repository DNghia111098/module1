kt.addEventListener("click" , function() {
    let a = +document.getElementById("so").value;
    if (a > 0) {
        document.getElementById("hienthi").innerHTML= "lớn hơn 0";
    } else {
        document.getElementById("hienthi").innerHTML= "nhỏ hơn 0"
    }
})
</script>