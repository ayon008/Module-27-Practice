document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositDisplayString = document.getElementById('deposit-display').innerText;
    const depositDisplayAmount = parseFloat(depositDisplayString);

    const depositAmountString = document.getElementById('deposit-field').value;
    const depositAmount = parseFloat(depositAmountString);

    const totalDeposit = depositAmount + depositDisplayAmount;
    document.getElementById('deposit-display').innerText = totalDeposit;


    const balanceDisplay = document.getElementById('balance-display').innerText;
    const balanceAmount = parseFloat(balanceDisplay);

    const totalBalance = balanceAmount + depositAmount;
    document.getElementById('balance-display').innerText = totalBalance;
    document.getElementById('deposit-field').value = '';
})


document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawDisplayString = document.getElementById('withdraw-display').innerText;
    const withdrawDisplayAmount = parseFloat(withdrawDisplayString);

    const withdrawAmountString = document.getElementById('withdraw-field').value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    const balanceDisplay = document.getElementById('balance-display').innerText;
    const balanceAmount = parseFloat(balanceDisplay);
    document.getElementById('withdraw-field').value = '';


    if (withdrawAmount > balanceAmount) {
        alert("You don't have sufficient money");
        return;
    }

    const totalWithdraw = withdrawAmount + withdrawDisplayAmount;
    document.getElementById('withdraw-display').innerText = totalWithdraw;


    const totalBalance = balanceAmount - withdrawAmount;
    document.getElementById('balance-display').innerText = totalBalance;









})