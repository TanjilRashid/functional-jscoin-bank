function getInputValue(inputId){
    const inputValueString = document.getElementById(inputId).value;
    const inputValue = parseFloat(inputValueString);
    document.getElementById(inputId).value = '';
    return inputValue;
}
function getCurrentValue(currentId){
    const currentValueString = document.getElementById(currentId).innerText;
    const currentValue = parseFloat(currentValueString);
    return currentValue;
}
function changeNewValue(changeId, changeValue){
    if(isNaN(changeValue)){
        return;
    }
    document.getElementById(changeId).innerText = changeValue;
}