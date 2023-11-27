// Số tiền ban đầu, số tháng gửi, lãi suất (%)
let initAmount = 1000;
let momthRepay = 12;
let interestRate = 1.6;

let interestRateDecimal = interestRate / 100;

//Tính lãi mỗi tháng
let loanMounth = 0;
let totalAmount = initAmount;

for (let month = 1; month <= monthRepay; month++) {
    loanMonth = totalAmount * interestRateDecimal;
    totalAmount += loanMounth;
} 

let totalInterest = (totalAmount - initAmount).toFixed(2);
let totalAmountAfter = totalAmount.toFixed(2);

document.write(totalInterest + "<br />");
document.write(totalAmountAfter);