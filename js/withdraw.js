document.getElementById('withdrawAction').addEventListener('click', function(){
    const withdrawInputValue = getInputValue('withdrawInput');
    const prevWithdrawValue = getCurrentValue('prevWithdrawAmount');
    const newWithdrawValue = prevWithdrawValue + withdrawInputValue;
    const prevBalanceValue = getCurrentValue('prevBalanceAmount');
    const newBalanceValue = prevBalanceValue - withdrawInputValue;
    if(withdrawInputValue > prevBalanceValue){
        alert("Ato taka nai husssss!!!");
        return;
    }
    changeNewValue('prevWithdrawAmount', newWithdrawValue);
    changeNewValue('prevBalanceAmount', newBalanceValue);
})