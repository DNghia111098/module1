let songuyen = [5, 8, 7, -6, "a1", "a2"];
let dem = 0;

for (let i = 0; i < songuyen.length; i++) {
    if (typeof(songuyen[i]) == "number") {
        console.log(typeof(songuyen[i]));
        dem++;
    }
}
console.log(dem);
