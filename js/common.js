function inputField(elementId){
    const inputFieldStringId = document.getElementById(elementId);
    const inputFieldString = inputFieldStringId.value;
    const inputField = parseFloat(inputFieldString); 
    if(inputFieldStringId.value < 0 || isNaN(inputFieldStringId.value)){
        return alert('Please provide a valid number.')
    }
    return inputField;
}
