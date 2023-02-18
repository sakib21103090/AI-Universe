
// function one for use all the card id inner input  and validation 
function inputField(elementId){
    const inputFieldStringId = document.getElementById(elementId);
    const inputFieldString = inputFieldStringId.value;
    const inputField = parseFloat(inputFieldString); 
    if(inputFieldStringId.value < 0 || isNaN(inputFieldStringId.value)){
        return alert('Please provide a valid number.')
    }
    return inputField;
}
// function 2 for table input the calculate value all the card button
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
document.getElementById('btn-blog').addEventListener('click',function(){
    window.location.href= 'ans.html';
})
