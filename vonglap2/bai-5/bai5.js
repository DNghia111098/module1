
function interestBank() {
    // Số tiền ban đầu, số tháng gửi, lãi suất (%)
    let initAmount = parseFloat(document.getElementById("initAmount").value);
    let monthRepay = parseInt(document.getElementById("monthRepay").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value);

    let interestRateDecimal = interestRate / 100;

    // Tính lãi mỗi tháng
    let loanMonth = 0;
    let totalAmount = initAmount; // 

    for (let month = 1; month <= monthRepay; month++) {
        loanMonth = totalAmount * interestRateDecimal;
        totalAmount += loanMonth;
    }

    let totalInterest = (totalAmount - initAmount).toFixed(2);
    let totalAmountAfter = totalAmount.toFixed(2);

    document.getElementById("totalInterest").innerHTML = `Tổng lãi: ${totalInterest} <br />`;
    document.getElementById("totalAmountAfter").innerHTML = `Tổng tiền nhận sau gửi ${totalAmountAfter}`;
}
