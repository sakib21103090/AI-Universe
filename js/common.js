function inputField(elementId){
    const inputFieldStringId = document.getElementById(elementId);
    const inputFieldString = inputFieldStringId.value;
    const inputField = parseFloat(inputFieldString); 
    if(inputFieldStringId.value < 0 || isNaN(inputFieldStringId.value)){
        return alert('Please provide a valid number.')
    }
    return inputField;
}

function DisplayData(n,A,p){
    const container=document.getElementById("table-container")
    const tr=document.createElement("tr");
    tr.innerHTML=`
    <td>${Serial}</td>
    <td>${n}</td>
    <td>${p}</td>
    <td>${A}</td>
    

    `;
    container.appendChild(tr);

}
