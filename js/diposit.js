document.getElementById('dipositAction').addEventListener('click', function(){
    const dipositInputValue = getInputValue('dipositInput');
    const prevDipositValue = getCurrentValue('prevDipositAmount');
    const newDipositValue = prevDipositValue + dipositInputValue;
    const prevBalanceValue = getCurrentValue('prevBalanceAmount');
    const newBalanceValue = prevBalanceValue + dipositInputValue;
    changeNewValue('prevDipositAmount', newDipositValue);
    changeNewValue('prevBalanceAmount', newBalanceValue);
})